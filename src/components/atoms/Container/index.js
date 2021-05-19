import styled from 'styled-components/native'
import { View } from 'react-native'
import { get } from 'lodash'

const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => get(theme, 'white', '#fff')};
`

export default Container
