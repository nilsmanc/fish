export type Fish = {
  speciesName: string
  quote: string
  photos: Array<string>
  location: string
  physicalDescription: string
  biology: string
  healthBenefits: string
  taste: string
  texture: string
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface FishSliceState {
  items: any
  status: 'loading' | 'success' | 'error'
}

export type FishParams = {
  name?: string | undefined
}
