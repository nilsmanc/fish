import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import fish from './fish/slice'
import page from './page/slice'

export const store = configureStore({
  reducer: {
    fish,
    page,
  },
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
