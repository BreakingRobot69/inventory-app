import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useColorScheme } from 'react-native-appearance'

import AppStack from './AppStack'

const Navigation = () => {
  const colorScheme = useColorScheme()
  const themeStatusBarStyle = colorScheme === 'light' ? 'dark-content' : 'light-content'

  return (
    <SafeAreaProvider>
      <StatusBar style={themeStatusBarStyle} />
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default Navigation
