import { StateSchema } from 'app/providers/StoreProvider'

export const getCommitesStateData = (state: StateSchema) => state.commitesData.commites
export const getCommitesStateError = (state: StateSchema) => state.commitesData.error
export const getCommitesStateLoading = (state: StateSchema) => state.commitesData.loading
