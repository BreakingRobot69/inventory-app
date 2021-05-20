import React from 'react'
import * as Haptics from 'expo-haptics'
import { Pressable } from 'react-native'

const Touchable = ({ children, onPress, ...props }) => {
  const handlePress = event => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    return onPress()
  }
  return (
    <Pressable onPress={handlePress} {...props}>
      {children}
    </Pressable>
  )
}

Touchable.propTypes = {
  ...Pressable.PropTypes
}

Touchable.defaultProps = {
  onPress: () => {}
}

export default Touchable
