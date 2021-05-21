import React, { useCallback } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'
import { isEmpty } from 'lodash'

import Text from '../../components/atoms/Text'
import { itemList } from '../../redux/selectors/item'
import Container from '../../components/atoms/Container'
import IconButton from '../../components/molecules/IconButton'
import InventoryList from '../../components/organisms/InventoryList'
import Content from '../../components/atoms/Content'

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

  if (isEmpty(items)) {
    return (
      <Container color='paleGrey' edges={['right', 'bottom', 'left']}>
        <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>You have no insured items in your inventory</Text>
        </Content>
      </Container>
    )
  }

  return (
    <Container color='paleGrey' edges={['right', 'bottom', 'left']}>
      <InventoryList items={items} />
    </Container>
  )
}

export default Inventory
