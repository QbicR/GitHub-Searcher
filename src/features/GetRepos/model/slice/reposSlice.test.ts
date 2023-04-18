import { reposAction, reposReducer } from './reposSlice'
import { getReposData } from '../services/getReposData'
import { RepositoriesType } from '../types/repositoryType'

const data: RepositoriesType = {
    repositories: [
        { id: 1234, name: '1234', language: 'TS', description: 'rep 1', stargazers_count: 10 },
        { id: 12345, name: '12345', language: 'TS', description: 'rep 12', stargazers_count: 11 },
        {
            id: 123456,
            name: '123456',
            language: 'TS',
            description: 'rep 123',
            stargazers_count: 12,
        },
        {
            id: 1234567,
            name: '1234567',
            language: 'TS',
            description: 'rep 1234',
            stargazers_count: 13,
        },
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
    ],
    reposName: '',
    loading: true,
    error: '',
}

describe('reposSlice.test', () => {
    test('test set repository name', () => {
        const action = reposAction.setReposName('Repository №1')
        const state = { ...data, reposName: '' }
        const expectedState = { ...data, reposName: 'Repository №1' }
        expect(reposReducer(state, action)).toEqual(expectedState)
    })

    test('test get repos data pending', () => {
        const action = { type: getReposData.pending.type }
        const state = reposReducer(data, action)
        expect(state).toEqual({ loading: true, error: '', reposName: '', repositories: [] })
    })

    test('test get repos data fullfiled', () => {
        const action = { type: getReposData.fulfilled.type, payload: data.repositories }
        const state = reposReducer(data, action)
        expect(state).toEqual({
            loading: false,
            error: '',
            reposName: '',
            repositories: [...action.payload],
        })
    })

    test('test get repos data rejected', () => {
        const action = { type: getReposData.rejected.type, payload: { error: 'error' } }
        const state = reposReducer(data, action)
        expect(state).toEqual({
            loading: false,
            error: action.payload,
            reposName: '',
            repositories: [],
        })
    })
})
