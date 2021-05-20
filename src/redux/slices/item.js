import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'items',
  initialState: {
    list: [{
      id: 1,
      name: 'titi',
      contractId: 1,
      price: '2000',
      image: 'http://placeimg.com/640/360/any',
      category: '',
      description: '',
      invoice: '',
      purchaseDate: ''
    }, {
      id: 2,
      contractId: 1,
      name: 'tata',
      price: '2000',
      image: 'http://placeimg.com/640/360/any',
      category: '',
      description: '',
      invoice: '',
      purchaseDate: ''
    }]
  },
  reducers: {},
  extraReducers: {}
})
