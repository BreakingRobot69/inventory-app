import { Platform } from 'react-native'

const theme = {
  fonts: {
    title: Platform.OS === 'ios' ? 'Avenir-Heavy' : 'Roboto',
    content: Platform.OS === 'ios' ? 'Avenir-Medium' : 'Roboto',
    input: Platform.OS === 'ios' ? 'Avenir-Roman' : 'Roboto'
  },
  colors: {
    black: 'rgb(2, 2, 2)',
    black12: 'rgba(0, 0, 0, 0.12)',
    black40: 'rgba(0, 0, 0, 0.4)',
    white: 'rgb(255, 255, 255)',
    paleGreyTwo: 'rgb(239, 242, 249)',
    paleGreyThree: 'rgb(222, 224, 230)',
    paleGrey: 'rgb(246, 247, 252)',
    blueyGrey: 'rgb(147, 153, 172)',
    blue: 'rgb(0, 66, 218)',
    red: 'rgb(255, 0, 51)'
  },
  fontSize: {
    xs: 11,
    small: 14,
    medium: 16,
    xlarge: 34
  },
  spacings: {
    small: 5,
    medium: 10,
    large: 20,
    xlarge: 30
  }
}

export default theme
