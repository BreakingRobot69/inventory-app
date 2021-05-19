import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { get, map } from 'lodash'

import Picker from '../../atoms/Picker'
import Text from '../../atoms/Text'
import TextField from '../../atoms/TextField'

const InputLabel = styled(Text)`
  padding-bottom: ${({ theme }) => get(theme, 'spacings.medium', 10)};
`

const AppInput = ({ label, picker, value, options, onChange, ...props }) => {
  if (picker) {
    const items = map(options, ({ value, label }) => ({
      label,
      value
    }))

    return (
      <Picker
        items={items}
        value={value}
        onValueChange={onChange}
        {...props} />
    )
  }

  return <TextField label={label} value={value} {...props} />
}

AppInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  picker: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })),
  onChange: PropTypes.func
}

AppInput.defaultProps = {
  label: '',
  value: '',
  options: [],
  picker: false,
  onChange: () => {}
}

const InputWrapper = styled(View)`
  padding-bottom: 20px;
`

const FormInput = ({ value, label, error, ...props }) => {
  return (
    <InputWrapper>
      <InputLabel type='content' size='xs' color='blueyGrey'>{label}</InputLabel>
      <AppInput
        testID='form-input'
        label={label}
        {...props} />
    </InputWrapper>
  )
}

FormInput.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string
}

FormInput.defaultProps = {
  error: null
}

export default FormInput
