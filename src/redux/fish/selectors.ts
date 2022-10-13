import { RootState } from '../store'

export const selectFish = (state: RootState) => state.fish.items

export const isLoadingFish = (state: RootState) => state.fish.status
