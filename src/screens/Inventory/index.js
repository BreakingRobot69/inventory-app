import React, { useCallback } from 'react'
import { View } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/core'

import Container from '../../components/atoms/Container'
import InventoryList from '../../components/organisms/InventoryList'
import IconButton from '../../components/molecules/IconButton'
import { useSelector } from 'react-redux'
import { itemList } from '../../redux/selectors/item'

const Inventory = () => {
  const navigation = useNavigation()
  const items = useSelector(itemList)
  useFocusEffect(
    useCallback(() => {
      const onPress = () => navigation.navigate('InventoryModal')
      const headerRight = (props) => <IconButton icon='ios-add-circle' size={28} color='blue' onPress={onPress} {...props} />

      navigation.setOptions({
        headerLargeTitle: true,
        headerRight,
        searchBar: {
        // search bar options
        }
      })
    }, [navigation]))
  return (
    <Container color='paleGrey' edges={['right', 'bottom', 'left']}>
      {/**
         * This is a View aiming to force headerLargeTitle to stay and to avoid a bug
         * from react-native-screens that render the small and center title instead of
         * the headerLargeTitle
         * c.f.: https://github.com/software-mansion/react-native-screens/issues/649
       */}
      <View />
      <InventoryList items={items} />
    </Container>
  )
}

export default Inventory
