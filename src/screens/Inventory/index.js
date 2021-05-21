import React, { useCallback } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { useFocusEffect, useNavigation } from '@react-navigation/core'

import { itemList } from '../../redux/selectors/item'
import Container from '../../components/atoms/Container'
import IconButton from '../../components/molecules/IconButton'
import InventoryList from '../../components/organisms/InventoryList'

const Inventory = () => {
  const navigation = useNavigation()
  const items = useSelector(itemList)
  useFocusEffect(
    useCallback(() => {
      const onPress = () => navigation.navigate('InventoryModal')
      const headerRight = (props) => <IconButton icon='ios-add-circle' size={32} color='blue' onPress={onPress} {...props} />

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
      <InventoryList items={items} />
    </Container>
  )
}

export default Inventory
