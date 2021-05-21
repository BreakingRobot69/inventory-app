import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import { get } from 'lodash'

import Text from '../Text'

const Label = styled(Text)`
  line-height: 16px;
  padding-left: 1.5px;
  padding-top: ${({ paddingTop = false, theme }) => paddingTop ? get(theme, 'spacings.small', 5) : 0}px;
  padding-bottom: ${({ paddingBottom = false, theme }) => paddingBottom ? get(theme, 'spacings.small', 5) : 0}px;
`

Label.propTypes = {
  paddingTop: PropTypes.bool,
  paddingBottom: PropTypes.bool
}

Label.defaultProps = {
  paddingTop: false,
  paddingBottom: false
}

export default Label
