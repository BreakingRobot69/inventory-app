import { createSlice, createAction } from '@reduxjs/toolkit'

export default createSlice({
  name: 'contracts',
  initialState: {
    list: [{
      id: 1,
      name: 'abc'
    }, {
      id: 2,
      name: 'abc'
    }]
  },
  reducers: {},
  extraReducers: {}
})
