import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { Text as NativeText } from 'react-native'
import { get } from 'lodash'

const Text = styled(NativeText)`
  font-family: ${({ type = 'content', theme }) => get(theme, `fonts.${type}`, 'Avenir-Medium')};
  font-size: ${({ size, theme }) => size ?? get(theme, 'fontSize.medium', 16)}px;
  color: ${({ color, theme }) => color ?? get(theme, 'colors.black', 16)}
`

Text.PropTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}

export default Text
