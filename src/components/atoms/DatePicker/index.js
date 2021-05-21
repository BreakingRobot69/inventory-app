import React, { useState } from 'react'
import styled from 'styled-components/native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { get, isEmpty } from 'lodash'
import { DateTime } from 'luxon'

import Text from '../Text'
import Touchable from '../Touchable'

const DateInput = styled(Touchable)`
  padding-vertical: 5px;
  border-bottom-width: 2px;
  font-size: ${({ size = 'medium', theme }) => get(theme, `fontSize.${size}`, 16)}px;
  color: ${({ color = 'black', theme }) => get(theme, `colors.${color}`, 'rgb(2, 2, 2)')}
  font-family: ${({ type = 'input', theme }) => get(theme, `fonts.${type}`, 'Avenir-Roman')};
  border-bottom-color: ${({ borderColor = 'paleGreyThree', theme }) => get(theme, `colors.${borderColor}`, 'rgb(2, 2, 2)')}
`

const DatePicker = ({ value, label, onValueChange }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const displayedText = !isEmpty(value)
    ? DateTime.fromISO(value).setLocale('en').toLocaleString(DateTime.DATE_FULL)
    : label

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date) => {
    const dateTime = DateTime.fromJSDate(date)
    onValueChange(dateTime.toISODate())
    hideDatePicker()
  }

  return (
    <>
      <DateInput onPress={showDatePicker}>
        <Text type='input' color='blueyGrey'>
          {displayedText}
        </Text>
      </DateInput>
      <DateTimePickerModal
        mode='date'
        isVisible={isDatePickerVisible}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  )
}

export default DatePicker
