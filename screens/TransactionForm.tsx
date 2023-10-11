import React, { useState } from 'react'
import { StyleSheet, TextInput, Button, Keyboard } from 'react-native'
import { Text, View } from '../components/Themed'
import { BASE_API_URL } from '../env'
import { useAccountContext } from '../context/AccountContext'

export const TransactionForm = () => {
  const [text, setText] = useState<string>('')
  const [hasError, setHasError] = useState<string | null>(null)

  const account = useAccountContext()

  const handleClick = async () => {
    if (!account?.account_id) return

    const data = {
      account_id: account?.account_id,
      amount: text,
    }

    try {
      const response = await fetch(`${BASE_API_URL}/transactions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const responseData = await response.json()
        console.log('Transaction successful:', responseData)
      } else {
        setHasError(response.status.toString())
        console.error('Error adding transaction:', response.status)
      }
    } catch (error) {
      setHasError('Server error')
      console.error('Error adding transaction:', error)
    } finally {
      Keyboard.dismiss()
      setText('')
      setHasError(null)
    }
  }

  return (
    <View style={styles.container}>
      <Text>Form</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <Button onPress={handleClick} title="Add transaction" />
      {hasError !== null ? (
        <View style={styles.error}>
          <Text>Something went wrong with your transaction: {hasError}</Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  error: {
    margin: 10,
    backgroundColor: '#FFCCCC',
    padding: 5,
  },
})
