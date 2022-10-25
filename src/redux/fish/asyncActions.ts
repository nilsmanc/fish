import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { FishType } from './../../components/types'

export const fetchFish = createAsyncThunk<FishType[], string>(
  'fish/fetchFishStatus',
  async (name) => {
    if (!name) {
      name = ''
    }
    const { data } = await axios.get(`https://www.fishwatch.gov/api/species${name}`)
    return data
  },
)
