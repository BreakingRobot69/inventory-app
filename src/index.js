import React from 'react'
import { Provider } from 'react-redux'
import { registerRootComponent } from 'expo'
import { enableScreens } from 'react-native-screens'
import { ThemeProvider } from 'styled-components/native'
import { PersistGate } from 'redux-persist/integration/react'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import 'react-native-gesture-handler'

import theme from './config/theme'
import Navigation from './navigations'
import { store, persistor } from './redux/bootstrapStore'

enableScreens()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ActionSheetProvider>
            <Navigation />
          </ActionSheetProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default registerRootComponent(App)
