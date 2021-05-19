import styled from 'styled-components/native'
import { View } from 'react-native'
import { get } from 'lodash'
import Touchable from '../Touchable'

const Card = styled(Touchable)`
  flex: 1;
  border-radius: 5px;
  background-color: white;
  box-shadow: ${({ theme }) => `0 10px 20px ${get(theme, 'colors.black12')}`}
`

export default Card
