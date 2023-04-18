import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'

import { StateSchema } from './StateSchema'
import { userReducer } from 'entities/Search'
import { reposReducer } from 'features/GetRepos'
import { commitesReducer } from 'features/GetCommits'

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        userData: userReducer,
        reposData: reposReducer,
        commitesData: commitesReducer,
    }

    const store = configureStore({
        reducer: rootReducers,
        preloadedState: initialState,
    })

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
