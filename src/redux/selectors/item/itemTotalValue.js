import { createSelector } from 'reselect'
import { groupBy } from 'lodash'

import { itemList } from './index'

export default createSelector([itemList], items => {
  return groupBy(items, 'contractId')
})
