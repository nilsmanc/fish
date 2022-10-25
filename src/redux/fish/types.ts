export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface FishSliceState {
  items: Array<any>
  status: 'loading' | 'success' | 'error'
}

export type FishParams = {
  name?: string | undefined
}
