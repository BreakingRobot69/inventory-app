import React, { useCallback } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/core'
import InventoryList from '../../components/organisms/InventoryList'
import Container from '../../components/atoms/Container'
import { Ionicons } from '@expo/vector-icons'

const Inventory = () => {
  const navigation = useNavigation()
  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        headerLargeTitle: true,
        headerRight: () => <Ionicons name="ios-add-circle" size={24} color="black" />,
        searchBar: {
        // search bar options
        }
      })
    }, [navigation]))
  return (
    <Container color='paleGrey'>
      <InventoryList />
    </Container>
  )
}

export default Inventory
