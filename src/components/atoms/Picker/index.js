import React from 'react'
import { get, isEmpty } from 'lodash'
import { Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import RNPickerSelect from 'react-native-picker-select'

import theme from '../../../config/theme'

const { width, height } = Dimensions.get('window')

const Picker = ({ style, placeholder, disabled, ...props }) => {
  const containerStyle = {
    position: 'relative',
    minWidth: '100%',
    paddingBottom: get(theme, 'spacings.medium', 10),
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderBottomColor: get(theme, 'colors.paleGreyThree', 'rgb(222, 224, 230)'),
    marginBottom: 20,
    ...get(style, 'containerStyle', {})
  }

  const commonInput = {
    color: get(theme, 'colors.paleGreyThree', 'rgb(222, 224, 230)'),
    fontFamily: 'Avenir-Roman',
    fontSize: 16,
    ...get(style, 'inputStyle', {})
  }

  const customStyle = {
    ...style,
    placeholder: {
      padding: 0,
      color: get(theme, 'colors.paleGreyThree', 'rgb(222, 224, 230)'),
      ...get(style, 'placeholder', {})
    },
    viewContainer: {
      ...containerStyle,
      ...get(style, 'viewContainer', {})
    },
    headlessAndroidContainer: {
      ...containerStyle,
      ...get(style, 'headlessAndroidContainer', {})
    },
    headlessAndroidPicker: {
      width,
      height
    },
    inputIOS: {
      ...commonInput,
      ...get(style, 'inputIOS', {})
    },
    inputAndroid: {
      ...commonInput,
      ...get(style, 'inputAndroid', {})
    }
  }
  const pickerPlaceholder = isEmpty(placeholder) ? {} : { label: placeholder, value: null }
  return (
    <RNPickerSelect
      disabled={disabled}
      style={customStyle}
      fixAndroidTouchableBug={true}
      useNativeAndroidPickerStyle={false}
      placeholder={pickerPlaceholder}
      {...props} />
  )
}

Picker.propTypes = {
  items: PropTypes.array.isRequired,
  onValueChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  placeholder: PropTypes.string
}

Picker.defaultProps = {
  style: {},
  placeholder: '',
  disabled: false
}

export default Picker
