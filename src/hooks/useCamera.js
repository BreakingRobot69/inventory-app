import * as ImagePicker from 'expo-image-picker'
import { get, isEqual } from 'lodash'

const defaultImageOptions = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  base64: true,
  quality: 0
}

export const useCamera = ({ imageOptions = defaultImageOptions }) => {
  const launch = async ({ isGallery }) => {
    const { status } = isEqual(isGallery, false)
      ? await ImagePicker.requestCameraPermissionsAsync()
      : await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (status !== 'granted') {
      alert('Nous avons besoin des permissions !')
    }

    const result = isEqual(isGallery, false)
      ? await ImagePicker.launchCameraAsync(imageOptions)
      : await ImagePicker.launchImageLibraryAsync(imageOptions)

    return get(result, 'uri', null)
  }

  return { launch }
}
