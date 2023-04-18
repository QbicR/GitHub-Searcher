import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'

import { StateSchema, ThunkExtraArg } from './StateSchema'
import { userReducer } from 'entities/Search'
import { reposReducer } from 'features/GetRepos'
import { commitesReducer } from 'features/GetCommits'
import { $api } from 'shared/api/api'

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        userData: userReducer,
        reposData: reposReducer,
        commitesData: commitesReducer,
    }

    const extraArg: ThunkExtraArg = { api: $api }

    const store = configureStore({
        reducer: rootReducers,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    })

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
