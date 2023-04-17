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

    return configureStore<StateSchema>({
        reducer: rootReducers,
        preloadedState: initialState,
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
