import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import AppStack from './AppStack'

const Navigation = () => {
  return (
    <SafeAreaProvider>
      <StatusBar style='dark' />
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default Navigation
