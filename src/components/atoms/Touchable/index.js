import React from 'react'
import { Pressable } from 'react-native'

const Touchable = ({ children, ...props }) => {
  return (
    <Pressable {...props}>
      {children}
    </Pressable>
  )
}
Touchable.propTypes = {
  ...Pressable.PropTypes
}

export default Touchable
