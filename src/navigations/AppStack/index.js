import React from 'react'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'

import Inventory from '../../screens/Inventory'
import InventoryModal from '../../screens/InventoryModal'

const Stack = createNativeStackNavigator()

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Inventory' component={Inventory} />
      <Stack.Screen name='InventoryModal' component={InventoryModal} />
    </Stack.Navigator>
  )
}

export default AppStack
