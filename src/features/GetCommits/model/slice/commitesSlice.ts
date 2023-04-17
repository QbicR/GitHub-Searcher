import { createSlice } from '@reduxjs/toolkit'

import { CommitesType } from '../types/commitType'
import { getCommitesData } from '../services/getCommitesData'

const initialState: CommitesType = {
    commites: [],
    loading: false,
    error: '',
}

export const commitesSlice = createSlice({
    name: 'commites',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCommitesData.pending, (state) => {
            state.loading = true
            state.error = ''
            state.commites = []
        })
        builder.addCase(getCommitesData.fulfilled, (state, action: any) => {
            state.loading = false
            state.error = ''
            state.commites = [...action.payload]
        })
        builder.addCase(getCommitesData.rejected, (state, action: any) => {
            state.loading = false
            state.error = action.payload
            state.commites = []
        })
    },
})

export const { actions: commitesAction } = commitesSlice
export const { reducer: commitesReducer } = commitesSlice
