import { StateSchema } from 'app/providers/StoreProvider'

export const getReposStateData = (state: StateSchema) => state.reposData.repositories
export const getReposStateReposName = (state: StateSchema) => state.reposData.reposName
export const getReposStateError = (state: StateSchema) => state.reposData.error
export const getReposStateLoading = (state: StateSchema) => state.reposData.loading
