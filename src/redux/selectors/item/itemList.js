import { get } from 'lodash'

export default state => get(state, 'item.list', [])
