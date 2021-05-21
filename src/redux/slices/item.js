import { createAction, createSlice } from '@reduxjs/toolkit'
import { get, filter, isEqual, toNumber } from 'lodash'
import { DateTime } from 'luxon'

export const addItem = createAction('items/add', (item) => {
  const itemDate = get(item, 'purchaseDate')
  return {
    payload: {
      id: DateTime.now().toMillis(),
      purchaseDate: DateTime.fromISO(itemDate).toISODate(),
      price: toNumber(get(item, 'price', 0)),
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
