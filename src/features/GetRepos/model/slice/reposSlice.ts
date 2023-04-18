import { createSlice } from '@reduxjs/toolkit'

import { RepositoriesType } from '../types/repositoryType'
import { getReposData } from '../services/getReposData'

const initialState: RepositoriesType = {
    repositories: [],
    loading: false,
    error: '',
}

export const reposSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getReposData.pending, (state) => {
            state.loading = true
            state.error = ''
            state.repositories = []
        })
        builder.addCase(getReposData.fulfilled, (state, action: any) => {
            state.loading = false
            state.error = ''
            state.repositories = [...action.payload]
        })
        builder.addCase(getReposData.rejected, (state, action: any) => {
            state.loading = false
            state.error = action.payload
            state.repositories = []
        })
    },
})

export const { actions: reposAction } = reposSlice
export const { reducer: reposReducer } = reposSlice
