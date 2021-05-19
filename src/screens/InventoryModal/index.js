import React, { useCallback } from 'react'
import Container from '../../components/atoms/Container'
import FormInput from '../../components/molecules/FormInput'
import { useFocusEffect, useNavigation } from '@react-navigation/core'
import IconButton from '../../components/molecules/IconButton'

const InventoryModal = () => {
  const navigation = useNavigation()
  useFocusEffect(
    useCallback(() => {
      const onPress = () => navigation.goBack()
      const headerLeft = (props) => <IconButton icon='ios-close' size={24} color='black' onPress={onPress} {...props} />

      navigation.setOptions({
        title: 'test',
        headerLeft,
        searchBar: {
          // search bar options
        }
      })
    }, [navigation]))

  return (
    <Container style={{ paddingHorizontal: 20 }}>
      <FormInput label='test' />
      <FormInput label='test' />
      <FormInput label='test' />
      <FormInput label='test' />
      <FormInput label='test' />
    </Container>
  )
}

export default InventoryModal
