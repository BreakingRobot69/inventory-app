import { get, map } from 'lodash'
import React, { memo } from 'react'
import PropTypes from 'prop-types'

import FormInput from '../FormInput'

const FormInputs = ({ inputs, values, handleBlur, setFieldValue, errors, submitCount }) => map(inputs, input => {
  const name = get(input, 'name')
  const error = get(errors, name, '')

  const onValueChange = value => setFieldValue(name, value)
  return (
    <React.Fragment key={name}>
      <FormInput
        touched
        name={name}
        icon={get(input, 'icon', false)}
        document={get(input, 'document', false)}
        date={get(input, 'date', false)}
        onBlur={handleBlur(name)}
        onConfirm={onValueChange}
        onChangeText={onValueChange}
        onValueChange={onValueChange}
        setFieldValue={setFieldValue}
        error={submitCount > 0 && error}
        keyboardType={input.keyboardType}
        autoCapitalize={input.autoCapitalize}
        value={get(values, name, '')}
        label={get(input, 'label', null)}
        options={get(input, 'options', [])}
        picker={get(input, 'picker', false)} />
    </React.Fragment>
  )
})

FormInputs.propTypes = {
  values: PropTypes.object.isRequired,
  handleBlur: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  submitCount: PropTypes.number.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default memo(FormInputs)
