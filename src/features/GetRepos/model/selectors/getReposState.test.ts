import { getReposState } from './getReposState'
import { StateSchema } from 'app/providers/StoreProvider'
import { repositories } from 'shared/const/mockDataForTests'

describe('getCommitesState.test', () => {
    test('should return getReposState state', () => {
        const state: DeepPartial<StateSchema> = {
            reposData: {
                repositories: repositories,
                loading: false,
                error: '',
            },
        }
        expect(getReposState(state as StateSchema)).toEqual({
            repositories: repositories,
            loading: false,
            error: '',
        })
    })
    test('should return repositories', () => {
        const state: DeepPartial<StateSchema> = {
            reposData: {
                repositories: repositories,
            },
        }
        expect(getReposState(state as StateSchema)).toEqual({
            repositories: repositories,
        })
    })
    test('should return loading', () => {
        const state: DeepPartial<StateSchema> = {
            reposData: {
                loading: true,
            },
        }
        expect(getReposState(state as StateSchema)).toEqual({
            loading: true,
        })
    })
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            reposData: {
                error: 'error',
            },
        }
        expect(getReposState(state as StateSchema)).toEqual({
            error: 'error',
        })
    })
    test('should work with empty commitesData state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getReposState(state as StateSchema)).toEqual(undefined)
    })
})
