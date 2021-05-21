import * as ImagePicker from 'expo-image-picker'
import { get, isEqual } from 'lodash'
import { Alert } from 'react-native'

const defaultImageOptions = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: false,
  quality: 0
}

export const useCamera = ({ imageOptions = defaultImageOptions }) => {
  const createSubmitAlert = ({ title, message }) =>
    Alert.alert(
      title,
      message,
      [{ text: 'OK' }]
    )

  const launch = async ({ isGallery }) => {
    const { status } = isEqual(isGallery, false)
      ? await ImagePicker.requestCameraPermissionsAsync()
      : await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (status !== 'granted') {
      return createSubmitAlert({
        title: 'Permissions refused',
        message: 'This app needs camera and gallery access to operate.'
      })
    }

    const result = isEqual(isGallery, false)
      ? await ImagePicker.launchCameraAsync(imageOptions)
      : await ImagePicker.launchImageLibraryAsync(imageOptions)

    return get(result, 'uri', null)
  }

  return { launch }
}
