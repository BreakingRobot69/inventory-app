import { combineReducers } from 'redux'

import item from '../slices/item'
import contract from '../slices/contract'

export default combineReducers({
  item: item.reducer,
  contract: contract.reducer
})
