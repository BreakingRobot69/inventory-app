import React from 'react'
import PropTypes from 'prop-types'
import styled, { useTheme } from 'styled-components/native'
import { get, isEmpty } from 'lodash'

import { Ionicons } from '@expo/vector-icons'
import Text from '../../atoms/Text'
import { Image } from 'react-native'
import Box from '../../atoms/Box'

const ActionImage = styled(Image)`
  width: 128px;
  height: 128px;
  overflow: hidden;
  resizeMode: cover;
  border-radius: 5px;
`

const ActionBox = ({ text, image, alignSelf, onPress, icon, iconSize, iconColor, borderColor, textProps, ...props }) => {
  const theme = useTheme()

  if (!isEmpty(image)) {
    return (
      <Box
        alignSelf={alignSelf}
        onPress={onPress}
        borderColor='transparent'
        {...props}>
        <ActionImage source={{ uri: image }} />
      </Box>
    )
  }

  return (
    <Box
      alignSelf={alignSelf}
      onPress={onPress}
      borderColor={borderColor}
      {...props}>
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
  image: PropTypes.string,
  onPress: PropTypes.func,
  text: PropTypes.string,
  icon: PropTypes.string,
  alignSelf: PropTypes.string,
  iconSize: PropTypes.number,
  textProps: PropTypes.object,
  iconColor: PropTypes.string,
  borderColor: PropTypes.string
}

ActionBox.defaultProps = {
  image: '',
  alignSelf: 'center',
  onPress: () => {},
  text: 'Placeholder',
  iconSize: 32,
  iconColor: 'blue',
  borderColor: 'blueyGrey'
}

export default ActionBox
