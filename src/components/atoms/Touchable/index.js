import React from 'react'
import * as Haptics from 'expo-haptics'
import { Pressable } from 'react-native'

const Touchable = ({ children, onPress, onLongPress, ...props }) => {
  const handlePress = event => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    return onPress()
  }

  const handleLongPress = event => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
    return onLongPress()
  }
  return (
    <Pressable
      onPress={handlePress}
      onLongPress={handleLongPress}
      {...props}
    >
      {children}
    </Pressable>
  )
}

Touchable.propTypes = {
  ...Pressable.PropTypes
}

Touchable.defaultProps = {
  onPress: () => {},
  onLongPress: () => {}
}

export default Touchable
