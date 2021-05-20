import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { get } from 'lodash'

import Text from '../Text'

const Label = styled(Text)`
  line-height: 16px;
  padding-left: 1.5px;
  padding-bottom: ${({ theme }) => get(theme, 'spacings.small', 5)}px;
`

const InputLabel = ({ label }) => <Label type='content' size='xs' color='blueyGrey'>{label}</Label>

InputLabel.propTypes = {
  label: PropTypes.string
}

InputLabel.defaultProps = {
  label: 'Placeholder'
}

export default InputLabel
