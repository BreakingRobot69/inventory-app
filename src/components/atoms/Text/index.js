import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { Text as NativeText } from 'react-native'
import { get } from 'lodash'

const Text = styled(NativeText)`
  font-family: ${({ type = 'content', theme }) => get(theme, `fonts.${type}`, 'Avenir-Medium')};
  font-size: ${({ size, theme }) => get(theme, `fontSize.${size}`, 16)}px;
  color: ${({ color = 'black', theme }) => get(theme, `colors.${color}`, 'rgb(2, 2, 2)')}
`

Text.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}

Text.defaultProps = {
  content: 'content',
  color: 'black'
}

export default Text
