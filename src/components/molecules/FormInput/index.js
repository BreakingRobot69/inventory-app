import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { map, isEmpty, get } from 'lodash'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

import Picker from '../../atoms/Picker'
import TextField from '../../atoms/TextField'
import Label from '../../atoms/Label'
import DatePicker from '../../atoms/DatePicker'
import DocumentBox from '../DocumentBox'

const AppInput = ({ label, picker, date, document, options, ...props }) => {
  if (picker) {
    const items = map(options, ({ value, label }) => ({
      label,
      value
    }))

    return (
      <Picker
        items={items}
        placeholder={label}
        {...props} />
    )
  }

  if (document) {
    return <DocumentBox text={label} {...props} />
  }

  if (date) {
    return <DatePicker label={label} {...props} />
  }

  return <TextField label={label} {...props} />
}

AppInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  date: PropTypes.bool,
  picker: PropTypes.bool,
  document: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }))
}

AppInput.defaultProps = {
  label: '',
  value: '',
  date: false,
  options: [],
  picker: false,
  document: false
}

const InputWrapper = styled(View)`
  padding-bottom: 20px;
`

const FormInput = ({ label, error, ...props }) => {
  return (
    <InputWrapper>
      {!isEmpty(label) && (
        <Label paddingBottom={true} type='content' size='xs' color='blueyGrey'>{label}</Label>
      )}
      <AppInput
        testID='form-input'
        label={label}
        {...props} />
      {!isEmpty(error) && (
        <Label paddingTop={true} type='content' size='xs' color='red'>{error}</Label>
      )}
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
