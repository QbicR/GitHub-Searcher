import { getCommitesData } from '../services/getCommitesData'
import { CommitesType } from '../types/commitType'
import { commitesReducer } from './commitesSlice'

const data: CommitesType = {
    commites: [
        { sha: '1234', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
        { sha: '12345', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
        { sha: '123456', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
        { sha: '1234567', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
        { sha: '12345678', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
        { sha: '123456789', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    ],
    loading: true,
    error: '',
}

describe('commitesSlice.test', () => {
    test('test get commites data pending', () => {
        const action = { type: getCommitesData.pending.type }
        const state = commitesReducer(data, action)
        expect(state).toEqual({ loading: true, error: '', commites: [] })
    })

    test('test get commites data fullfiled', () => {
        const action = { type: getCommitesData.fulfilled.type, payload: data.commites }
        const state = commitesReducer(data, action)
        expect(state).toEqual({ loading: false, error: '', commites: [...action.payload] })
    })

    test('test get commites data rejected', () => {
        const action = { type: getCommitesData.rejected.type, payload: { error: 'error' } }
        const state = commitesReducer(data, action)
        expect(state).toEqual({
            loading: false,
            error: action.payload,
            commites: [],
        })
    })
})
