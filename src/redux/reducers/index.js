import { combineReducers } from 'redux'

import item from '../slices/item'

export default combineReducers({
  item: item.reducer
})
