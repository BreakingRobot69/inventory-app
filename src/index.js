import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { registerRootComponent } from 'expo'
import { enableScreens } from 'react-native-screens'
import { ThemeProvider } from 'styled-components/native'
import { AppearanceProvider } from 'react-native-appearance'
import { PersistGate } from 'redux-persist/integration/react'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import * as ScreenOrientation from 'expo-screen-orientation';
import 'react-native-gesture-handler'

import theme from './config/theme'
import Navigation from './navigations'
import { store, persistor } from './redux/bootstrapStore'

enableScreens()

const App = () => {
  useEffect(() => {
    (async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
    })()
  })

  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}>
        <ThemeProvider theme={theme}>
          <AppearanceProvider>
            <ActionSheetProvider>
              <Navigation />
            </ActionSheetProvider>
          </AppearanceProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default registerRootComponent(App)
