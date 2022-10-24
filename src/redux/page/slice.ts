import { createSlice } from '@reduxjs/toolkit'
import { PageSliceState } from './types'

const initialState: PageSliceState = {
  number: 1,
}

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setCurrentPageNumber(state, action) {
      state.number = action.payload
    },
  },
})

export const { setCurrentPageNumber } = pageSlice.actions

export default pageSlice.reducer
