import { createAction, createSlice } from '@reduxjs/toolkit'
import { get, trim, filter, isEqual, toNumber } from 'lodash'
import { DateTime } from 'luxon'

export const addItem = createAction('items/add', (item) => {
  const id = DateTime.now().toMillis()
  const name = trim(get(item, 'name'))
  const price = toNumber(get(item, 'price', 0))
  const purchaseDate = DateTime.fromISO(get(item, 'purchaseDate')).toISODate()
  return {
    payload: {
      id,
      name,
      price,
      purchaseDate,
      ...item
    }
  }
})

export const removeItem = createAction('items/remove', (id) => ({
  payload: id
}))

export default createSlice({
  name: 'items',
  initialState: {
    list: []
  },
  reducers: {},
  extraReducers: {
    [addItem]: (state, action) => {
      state.list = [get(action, 'payload'), ...get(state, 'list')]
    },
    [removeItem]: (state, action) => {
      state.list = filter(get(state, 'list'), ({ id }) => isEqual(get(action, 'payload'), id))
    }
  }
})
