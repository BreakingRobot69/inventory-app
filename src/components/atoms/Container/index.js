import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { get } from 'lodash'

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ color = 'white', theme }) => get(theme, `colors.${color}`, '#fff')};
`

export default Container
