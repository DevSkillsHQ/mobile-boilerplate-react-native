import React, { createContext, useContext, useEffect, useState } from 'react'
import { BASE_API_URL } from '../env'
import { useFetch } from '../hooks/useFetch'
import { Account } from '../types'

const AccountContext = createContext<Account | null>(null)

export const AccountProvider: React.FC<{
  children: React.ReactElement
  accountId: string
}> = ({ children, accountId }) => {
  const [account, setAccount] = useState<Account | null>(null)
  const { data, error } = useFetch<Account>(
    `${BASE_API_URL}/accounts/${accountId}`
  )

  useEffect(() => {
    if (data) {
      setAccount(data)
    }
  }, [data])

  useEffect(() => {
    if (error) {
      console.error('Error fetching account data:', error)
    }
  }, [error])

  return (
    <AccountContext.Provider value={account}>
      {children}
    </AccountContext.Provider>
  )
}

export const useAccountContext = () => {
  const context = useContext(AccountContext)
  return context
}
