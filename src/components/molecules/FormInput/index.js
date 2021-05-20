import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { map } from 'lodash'

import Picker from '../../atoms/Picker'
import TextField from '../../atoms/TextField'
import InputLabel from '../../atoms/InputLabel'

const AppInput = ({ label, picker, value, options, ...props }) => {
  if (picker) {
    const items = map(options, ({ value, label }) => ({
      label,
      value
    }))

    return (
      <Picker
        placeholder={label}
        items={items}
        value={value}
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
  }))
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

const FormInput = ({ label, error, ...props }) => {
  return (
    <InputWrapper>
      <InputLabel label={label} />
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
  label: '',
  error: null
}

export default FormInput
