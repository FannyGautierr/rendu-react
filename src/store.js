import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { articleAPI } from './Services/API'

export const store = configureStore({
  reducer: {
    [articleAPI.reducerPath]: articleAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleAPI.middleware),
})

setupListeners(store.dispatch)