import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { get, map } from 'lodash'

import DocumentBox from '../DocumentBox'

const DocumentBoxes = ({ boxes, values, errors, submitCount, setFieldValue }) => map(boxes, box => {
  const name = get(box, 'name', '')
  const icon = get(box, 'icon', '')
  const text = get(box, 'text', '')
  const error = get(errors, name, '')

  const borderColor = (submitCount > 0 && error) ? 'red' : 'blueyGrey'

  return <DocumentBox
      key={name}
      rightSpacing='large'
      name={name}
      icon={icon}
      text={text}
      borderColor={borderColor}
      value={get(values, name)}
      setFieldValue={setFieldValue} />
})

DocumentBoxes.propTypes = {
  boxes: PropTypes.array,
  values: PropTypes.object,
  setFieldValue: PropTypes.func
}

export default memo(DocumentBoxes)
