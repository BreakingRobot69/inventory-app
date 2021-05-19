import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { TextInput as NativeTextInput } from 'react-native'
import { get } from 'lodash'

const TextInput = styled(NativeTextInput)`
  font-family: ${({ type = 'input', theme }) => get(theme, `fonts.${type}`, 'Avenir-Roman')};
  font-size: ${({ size = 'medium', theme }) => get(theme, `fontSize.${size}`, 16)}px;
  color: ${({ color = 'black', theme }) => get(theme, `colors.${color}`, 'rgb(2, 2, 2)')}
  border-bottom-width: 2px;
  border-bottom-color: ${({ borderColor = 'black', theme }) => get(theme, `colors.${borderColor}`, 'rgb(2, 2, 2)')}
`

TextInput.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string
}

TextInput.defaultProps = {
  type: 'input',
  size: 'medium',
  color: 'black',
  borderColor: 'black'
}

const TextField = ({ label, type, size, color, onFocus, onBlur, ...textInputProps }) => {
  const [focused, setFocused] = useState(false)
  const borderColor = focused ? 'blue' : 'paleGreyThree'

  const handleFocus = event => {
    setFocused(true)
    return onFocus
  }

  const handleBlur = event => {
    setFocused(false)
    return onBlur
  }

  return <TextInput
    type={type}
    size={size}
    color={color}
    placeholder={label}
    onBlur={handleBlur}
    onFocus={handleFocus}
    borderColor={borderColor}
    {...textInputProps}
  />
}

TextField.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
}

TextField.defaultProps = {
  type: 'input',
  size: 'medium',
  color: 'black',
  onFocus: () => {},
  onBlur: () => {}
}

export default TextField
