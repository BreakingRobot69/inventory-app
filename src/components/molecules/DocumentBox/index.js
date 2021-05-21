import React from 'react'
import PropTypes from 'prop-types'
import * as ImagePicker from 'expo-image-picker'
import { useActionSheet } from '@expo/react-native-action-sheet'
import { isEqual } from 'lodash'

import ActionBox from '../ActionBox'
import { useCamera } from '../../../hooks/useCamera'

const DocumentBox = ({ name, text, icon, alignSelf, value, setFieldValue, ...props }) => {
  const { showActionSheetWithOptions } = useActionSheet()
  const { launch } = useCamera({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: false,
    quality: 0
  })

  const onDocumentPress = async () => {
    const options = ['Take a picture', 'Use an existing picture', 'Cancel']
    const cancelButtonIndex = 2
    await showActionSheetWithOptions({
      options,
      cancelButtonIndex
    },
    async buttonIndex => {
      const isCancel = isEqual(buttonIndex, cancelButtonIndex)
      const isGallery = isEqual(buttonIndex, 1)

      const image = isEqual(isCancel, false) ? await launch({ isGallery }) : value

      return setFieldValue(name, image)
    })
  }

  return (
    <ActionBox
      image={value}
      text={text}
      icon={icon}
      alignSelf={alignSelf}
      onPress={onDocumentPress}
      {...props} />
  )
}

DocumentBox.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string,
  alignSelf: PropTypes.string,
  setFieldValue: PropTypes.func
}

export default DocumentBox
