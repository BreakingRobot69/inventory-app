import React from 'react'
import PropTypes from 'prop-types'

import Content from '../../atoms/Content'
import FormInputs from '../../molecules/FormInputs'
import DocumentBox from '../../molecules/DocumentBox'
import Label from '../../atoms/Label'
import DocumentBoxes from '../../molecules/DocumentBoxes'

const ItemForm = ({ textInputs, documentInputs, values, errors, setFieldValue, handleBlur, submitCount }) => {
  return (
    <Content contentContainerStyle={{ flexGrow: 1, paddingTop: 40, paddingHorizontal: 20 }}>
      <DocumentBox
        name='image'
        icon='ios-camera'
        text='Add Photo'
        value={values.image}
        setFieldValue={setFieldValue} />
      <FormInputs
        values={values}
        inputs={textInputs}
        errors={errors}
        setFieldValue={setFieldValue}
        handleBlur={handleBlur}
        submitCount={submitCount} />
      <Label paddingBottom={true} type='content' size='xs' color='blueyGrey'>Documents</Label>
      <Content horizontal={true}>
        <DocumentBoxes
          errors={errors}
          values={values}
          boxes={documentInputs}
          submitCount={submitCount}
          setFieldValue={setFieldValue} />
      </Content>
    </Content>
  )
}

ItemForm.propTypes = {
  textInputs: PropTypes.array.isRequired,
  documentInputs: PropTypes.array.isRequired,
  values: PropTypes.shape({
    image: PropTypes.string,
    invoice: PropTypes.string
  }).isRequired,
  errors: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  setFieldValue: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  submitCount: PropTypes.number.isRequired
}

export default ItemForm
