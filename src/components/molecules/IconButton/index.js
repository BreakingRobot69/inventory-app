import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import { useTheme } from 'styled-components'
import { Ionicons } from '@expo/vector-icons'
import Touchable from '../../atoms/Touchable'

const IconButton = ({ icon, size, color, ...props }) => {
  // eslint-disable-next-line no-undef
  const theme = useTheme()
  return (
    <Touchable {...props}>
      <Ionicons name={icon} size={size} color={get(theme, `colors.${color}`)} />
    </Touchable>
  )
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string
}

IconButton.defaultProps = {
  size: 18,
  color: 'black'
}

export default IconButton
