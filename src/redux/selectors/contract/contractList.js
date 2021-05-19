import { get } from 'lodash'

export default state => get(state, 'contract.list', [])
