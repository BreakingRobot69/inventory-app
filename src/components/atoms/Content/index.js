import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: transparent;
`

const Content = ({ children, contentContainerStyle, disableKBDismissScroll, keyboardShouldPersistTaps, style, ...props }) => {
  const scrollView = React.useRef()

  return (
    <SafeArea style={style}>
      <KeyboardAwareScrollView
        automaticallyAdjustContentInsets={false}
        resetScrollToCoords={disableKBDismissScroll ? null : { x: 0, y: 0 }}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        ref={scrollView}
        style={style}
        {...props}
        contentContainerStyle={contentContainerStyle}>
        {children}
      </KeyboardAwareScrollView>
    </SafeArea>
  )
}

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  contentContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  disableKBDismissScroll: PropTypes.bool,
  keyboardShouldPersistTaps: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

Content.defaultProps = {
  contentContainerStyle: {},
  disableKBDismissScroll: false,
  keyboardShouldPersistTaps: 'handled'
}

export default Content
