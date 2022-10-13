import { createSlice } from '@reduxjs/toolkit'
import { fetchFish } from './asyncActions'
import { FishSliceState, Status } from './types'

const initialState: FishSliceState = {
  items: [],
  status: Status.LOADING,
}

const fishSlice = createSlice({
  name: 'fish',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFish.pending, (state, action) => {
      state.status = Status.LOADING
      state.items = []
    })
    builder.addCase(fetchFish.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = Status.SUCCESS
    })
    builder.addCase(fetchFish.rejected, (state, action) => {
      state.status = Status.ERROR
      state.items = []
    })
  },
})

export const { setItems } = fishSlice.actions

export default fishSlice.reducer
