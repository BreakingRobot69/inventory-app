import React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import Inventory from '../../screens/Inventory'

const Stack = createNativeStackNavigator()

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Inventory' component={Inventory} options={{
        headerLargeTitle: true
      }} />
    </Stack.Navigator>
  )
}

export default AppStack
