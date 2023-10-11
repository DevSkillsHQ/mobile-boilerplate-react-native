import { useEffect, useState } from 'react'

export const useFetch = <T>(
  url: string,
  method: 'GET' | 'POST' = 'GET',
  body?: unknown,
  options?: RequestInit
) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<unknown>(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const requestOptions: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: method === 'POST' ? JSON.stringify(body) : undefined,
        ...options,
      }

      const response = await fetch(url, requestOptions)
      const responseData = await response.json()
      setData(responseData)
    } catch (err) {
      setError(err)
      console.error('Error fetching data: ', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url, method, body, options])

  return { loading, error, data, refetch: fetchData }
}
