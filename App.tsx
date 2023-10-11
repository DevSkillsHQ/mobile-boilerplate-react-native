import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import { AccountProvider } from './context/AccountContext'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <AccountProvider accountId="0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2">
          <Navigation colorScheme={colorScheme} />
        </AccountProvider>
        <StatusBar />
      </SafeAreaProvider>
    )
  }
}
