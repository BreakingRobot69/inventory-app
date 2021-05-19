import styled from 'styled-components/native'
import { View } from 'react-native'
import { get } from 'lodash'

const Container = styled(View)`
  flex: 1;
  background-color: ${({ color = 'white', theme }) => get(theme, `colors.${color}`, '#fff')};
`

export default Container
