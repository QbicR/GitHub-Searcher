import { createSlice } from '@reduxjs/toolkit'

import { RepositoriesType } from '../types/repositoryType'
import { getReposData } from '../services/getReposData'

const initialState: RepositoriesType = {
    repositoties: [],
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
            state.repositoties = []
        })
        builder.addCase(getReposData.fulfilled, (state, action: any) => {
            state.loading = false
            state.error = ''
            state.repositoties = [...action.payload]
        })
        builder.addCase(getReposData.rejected, (state, action: any) => {
            state.loading = false
            state.error = action.payload
            state.repositoties = []
        })
    },
})

export const { actions: reposAction } = reposSlice
export const { reducer: reposReducer } = reposSlice
