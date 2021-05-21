import { createSelector } from 'reselect'
import { filter, isEqual } from 'lodash'

import itemList from './itemList'

const getContractId = (_, cid) => cid

export default createSelector([itemList, getContractId], (items, cid) =>
  filter(items, ({ contractId }) => isEqual(contractId, cid)))
