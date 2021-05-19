import React from 'react'
import { registerRootComponent } from 'expo'
import { enableScreens } from 'react-native-screens'
import { ThemeProvider } from 'styled-components/native'
import 'react-native-gesture-handler'

import Navigation from './navigations'
import theme from './config/theme'

enableScreens()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  )
}

export default registerRootComponent(App)
