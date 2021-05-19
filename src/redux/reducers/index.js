import { combineReducers } from 'redux'

import contract from '../slices/contract'

export default combineReducers({
  contract: contract.reducer
})
