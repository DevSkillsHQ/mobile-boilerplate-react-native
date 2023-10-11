import React, { useCallback } from 'react'
import { StyleSheet, ScrollView, Button } from 'react-native'
import { Text, View } from '../components/Themed'
import { useFetch } from '../hooks/useFetch'
import { BASE_API_URL } from '../env'
import { useFocusEffect } from '@react-navigation/native'
import { TransactionItem } from '../components/TransactionItem'
import { Transaction } from '../types'

export const TransactionHistory = () => {
  const { error, data, refetch } = useFetch<Transaction[]>(
    `${BASE_API_URL}/transactions`
  )

  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [])
  )

  if (error)
    return (
      <View style={styles.container}>
        <Button onPress={refetch} title="Refetch data" />
        <Text>
          Something went wrong in loading the content. Please refresh.
        </Text>
      </View>
    )

  return (
    <View style={styles.container}>
      <ScrollView>
        <Button onPress={refetch} title="Refetch data" />
        {data?.map((item: Transaction) => (
          <TransactionItem item={item} />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})
