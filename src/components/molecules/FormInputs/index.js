import { get, map } from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'

import FormInput from '../FormInput'

const FormInputs = ({ inputs, values, handleBlur, handleChange, errors, submitCount }) => map(inputs, input => {
  const error = get(errors, input.name, '')

  return (
      <React.Fragment key={input.name}>
        <FormInput
          touched
          onBlur={handleBlur(input.name)}
          keyboardType={input.keyboardType}
          error={submitCount > 0 && error}
          autoCapitalize={input.autoCapitalize}
          onChangeText={handleChange(input.name)}
          onValueChange={handleChange(input.name)}
          value={get(values, input.name, '')}
          label={get(input, 'label', null)}
          options={get(input, 'options', [])}
          picker={get(input, 'picker', false)} />
      </React.Fragment>
  )
}
)

FormInputs.propTypes = {
  values: PropTypes.object.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitCount: PropTypes.number.isRequired,
  inputs: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FormInputs
