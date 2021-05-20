import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { TextInput as NativeTextInput } from 'react-native'
import { get } from 'lodash'
import { useTheme } from '@react-navigation/native'

const TextInput = styled(NativeTextInput)`
  font-family: ${({ type = 'input', theme }) => get(theme, `fonts.${type}`, 'Avenir-Roman')};
  font-size: ${({ size = 'medium', theme }) => get(theme, `fontSize.${size}`, 16)}px;
  color: ${({ color = 'black', theme }) => get(theme, `colors.${color}`, 'rgb(2, 2, 2)')}
  border-bottom-width: 2px;
  padding-vertical: 5px;
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
  const theme = useTheme()
  const [focused, setFocused] = useState(false)
  const borderColor = focused ? 'blue' : 'paleGreyThree'

  const placeholderColor = get(theme, 'colors.blueyGrey')

  const handleFocus = event => {
    setFocused(true)
    return onFocus(event)
  }

  const handleBlur = event => {
    setFocused(false)
    return onBlur(event)
  }

  return <TextInput
    type={type}
    size={size}
    color={color}
    placeholder={label}
    onBlur={handleBlur}
    onFocus={handleFocus}
    borderColor={borderColor}
    placeholderTextColor={placeholderColor}
    {...textInputProps}
  />
}

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
}

TextField.defaultProps = {
  label: '',
  type: 'input',
  size: 'medium',
  color: 'black',
  onFocus: () => {},
  onBlur: () => {}
}

export default TextField
