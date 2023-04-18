import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { UserType } from '../types/userTypes'
import { getUserInfo } from '../services/getUserInfo'

const initialState: UserType = {
    searchValue: '',
    id: null,
    login: '',
    avatar_url: '',
    loading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUserInfo.pending, (state) => {
            state.loading = true
            state.error = ''
            state.id = null
            state.login = ''
            state.avatar_url = ''
        })
        builder.addCase(getUserInfo.fulfilled, (state, action) => {
            state.loading = false
            state.error = ''
            state.id = action.payload.id
            state.login = action.payload.login
            state.avatar_url = action.payload.avatar_url
        })
        builder.addCase(getUserInfo.rejected, (state, action: any) => {
            state.loading = false
            state.error = action.payload
            state.id = null
            state.login = ''
            state.avatar_url = ''
        })
    },
})

export const { actions: userAction } = userSlice
export const { reducer: userReducer } = userSlice
