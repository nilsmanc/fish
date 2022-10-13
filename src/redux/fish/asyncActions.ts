import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { FishParams } from './types'

export const fetchFish = createAsyncThunk<any, any>('fish/fetchFishStatus', async (name) => {
  if (name == undefined) {
    name = ''
  }
  const { data } = await axios.get(`https://www.fishwatch.gov/api/species${name}`)
  return data
})
