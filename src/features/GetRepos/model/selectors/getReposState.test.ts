import { getReposState } from './getReposState'
import { RepositoryType } from '../types/repositoryType'
import { StateSchema } from 'app/providers/StoreProvider'

const repositories: RepositoryType[] = [
    { id: 1234, name: '1234', language: 'TS', description: 'rep 1', stargazers_count: 10 },
    { id: 12345, name: '12345', language: 'TS', description: 'rep 12', stargazers_count: 11 },
    { id: 123456, name: '123456', language: 'TS', description: 'rep 123', stargazers_count: 12 },
    { id: 1234567, name: '1234567', language: 'TS', description: 'rep 1234', stargazers_count: 13 },
    {
        id: 12345678,
        name: '12345678',
        language: 'TS',
        description: 'rep 12345',
        stargazers_count: 14,
    },
    {
        id: 123456789,
        name: '123456789',
        language: 'TS',
        description: 'rep 123456',
        stargazers_count: 15,
    },
]

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
