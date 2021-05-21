import React, { useCallback } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { get, reduce, toNumber } from 'lodash'
import { useFormik } from 'formik'
import { Alert } from 'react-native'

import Text from '../../components/atoms/Text'
import { addItem } from '../../redux/slices/item'
import { itemList } from '../../redux/selectors/item'
import Touchable from '../../components/atoms/Touchable'
import ItemForm from '../../components/organisms/ItemForm'
import Container from '../../components/atoms/Container'
import IconButton from '../../components/molecules/IconButton'
import itemTotalValue from '../../redux/selectors/item/itemTotalValue'
import { itemSchema, itemTextInputs, documentInputs } from '../../forms/item'
import { useValidation } from '../../hooks/useValidation'

const InventoryModal = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const items = useSelector(itemList)
  const { compareItems, checkValueExceed } = useValidation({
    valueLimit: 40000
  })
  const itemsByContract = useSelector(itemTotalValue)

  const createSubmitAlert = ({ title, message }) =>
    Alert.alert(
      title,
      message,
      [{ text: 'OK' }]
    )

  const { submitCount, setFieldValue, errors, values, handleBlur, submitForm } = useFormik({
    initialValues: {
      contractId: 0,
      name: '',
      price: 0,
      image: '',
      invoice: '',
      category: '',
      description: '',
      purchaseDate: ''
    },
    validationSchema: itemSchema,
    onSubmit: async values => {
      const contractId = get(values, 'contractId')
      const sameItem = compareItems({ items, values })
      const valueExceed = checkValueExceed({
        items: get(itemsByContract, contractId),
        value: get(values, 'price')
      })

      if (sameItem) {
        return createSubmitAlert({
          title: 'Unable to add item',
          message: 'This item is already covered by a contract, you can only add an item to a single contract'
        })
      }

      if (valueExceed) {
        return createSubmitAlert({
          title: 'Unable to add item',
          message: 'This contract is exceeding its insurance total value of 40 000€'
        })
      }

      dispatch(addItem(values))
      navigation.navigate('Inventory')
    }
  })

  useFocusEffect(
    useCallback(() => {
      const onPress = () => navigation.goBack()
      const headerLeft = (props) => <IconButton icon='ios-close' size={24} color='black' onPress={onPress} {...props} />
      const headerRight = () => (
        <Touchable onPress={submitForm}>
          <Text>Save</Text>
        </Touchable>
      )
      navigation.setOptions({
        title: 'New Object',
        headerLeft,
        headerRight
      })
    }, [navigation]))

  return (
    <Container edges={['right', 'bottom', 'left']}>
      <ItemForm
        values={values}
        errors={errors}
        handleBlur={handleBlur}
        submitCount={submitCount}
        textInputs={itemTextInputs}
        setFieldValue={setFieldValue}
        documentInputs={documentInputs} />
    </Container>
  )
}

export default InventoryModal
