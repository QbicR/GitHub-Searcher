import { getReposData } from '../services/getReposData'
import { RepositoriesType } from '../types/repositoryType'
import { reposReducer } from './reposSlice'

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
    loading: true,
    error: '',
}

describe('reposSlice.test', () => {
    test('test get repos data pending', () => {
        const action = { type: getReposData.pending.type }
        const state = reposReducer(data, action)
        expect(state).toEqual({ loading: true, error: '', repositories: [] })
    })

    test('test get repos data fullfiled', () => {
        const action = { type: getReposData.fulfilled.type, payload: data.repositories }
        const state = reposReducer(data, action)
        expect(state).toEqual({ loading: false, error: '', repositories: [...action.payload] })
    })

    test('test get repos data rejected', () => {
        const action = { type: getReposData.rejected.type, payload: { error: 'error' } }
        const state = reposReducer(data, action)
        expect(state).toEqual({
            loading: false,
            error: action.payload,
            repositories: [],
        })
    })
})
