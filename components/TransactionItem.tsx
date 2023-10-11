import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useAccountContext } from '../context/AccountContext'
import { Transaction } from '../types'

export const TransactionItem = ({ item }: { item: Transaction }) => {
  const account = useAccountContext()
  return (
    <View style={styles.itemContainer} key={item.transaction_id}>
      <Text>
        Transferred ${item.amount} from account {item.account_id}
      </Text>
      {account?.account_id === item.account_id ? (
        <Text>The current balance is {account.balance}</Text>
      ) : (
        <></>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 5,
    padding: 15,
    backgroundColor: 'papayawhip',
  },
})
