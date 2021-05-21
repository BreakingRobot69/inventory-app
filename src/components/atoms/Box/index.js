import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { get } from 'lodash'

import Touchable from '../Touchable'

const Box = styled(Touchable)`
  width: ${({ size = 128 }) => size}px;
  height: ${({ size = 128 }) => size}px;
  border-radius: ${({ radius = 5 }) => radius}px;
  align-self: ${({ alignSelf = 'auto' }) => alignSelf};
  justify-content: ${({ justify = 'center' }) => justify};
  align-items: ${({ alignItems = 'center' }) => alignItems};
  border-width: ${({ borderWidth = 1.5 }) => borderWidth}px;
  border-style: ${({ borderStyle = 'dashed' }) => borderStyle};
  margin-right: ${({ rightSpacing = 0, theme }) => get(theme, `spacings.${rightSpacing}`, rightSpacing)}px;
  border-color: ${({ theme, borderColor }) => get(theme, `colors.${borderColor}`, borderColor)};
`

Box.propTypes = {
  size: PropTypes.number,
  radius: PropTypes.number,
  justify: PropTypes.string,
  alignSelf: PropTypes.string,
  alignItems: PropTypes.string,
  borderColor: PropTypes.string,
  borderStyle: PropTypes.string,
  borderWidth: PropTypes.number,
  rightSpacing: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default Box
