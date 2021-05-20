import React from 'react'
import PropTypes from 'prop-types'
import styled, { useTheme } from 'styled-components/native'
import { get, isEmpty } from 'lodash'

import Touchable from '../../atoms/Touchable'
import { Ionicons } from '@expo/vector-icons'
import Text from '../../atoms/Text'

const Box = styled(Touchable)`
  width: 128px;
  height: 128px;
  border-radius: 5px;
  align-items: center;
  border-width: 1.5px;
  border-style: dashed;
  align-self: ${({ align = 'auto' }) => align};
  justify-content: center;
  border-color: ${({ theme, borderColor }) => get(theme, `colors.${borderColor}`, borderColor)};
`

const ActionBox = ({ text, align, onPress, icon, iconSize, iconColor, borderColor, textProps }) => {
  const theme = useTheme()

  return (
    <Box
      align={align}
      onPress={onPress}
      borderColor={borderColor}>
      {!isEmpty(icon) && (
        <Ionicons name={icon} size={iconSize} color={get(theme, `colors.${iconColor}`)} />
      )}
      <Text {...textProps}>
        {text}
      </Text>
    </Box>
  )
}

ActionBox.propTypes = {
  align: PropTypes.string,
  onPress: PropTypes.func,
  text: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  textProps: PropTypes.object,
  iconColor: PropTypes.string,
  borderColor: PropTypes.string
}

ActionBox.defaultProps = {
  align: 'auto',
  onPress: () => {},
  text: 'Placeholder',
  iconSize: 32,
  iconColor: 'blue',
  borderColor: 'blueyGrey'
}

export default ActionBox
