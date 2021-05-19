import createStore from './index'

export const { store, persistor } = createStore()

export const { dispatch } = store
