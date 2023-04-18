import { getCommitesData } from '../services/getCommitesData'
import { CommitType, CommitesType } from '../types/commitType'
import { commitesReducer } from './commitesSlice'

const data: any = [
    { sha: '1234', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '12345', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '123456', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '1234567', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '12345678', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '123456789', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
]

describe('commitesSlice.test', () => {
    test('test get commites data pending', () => {
        const state: DeepPartial<CommitesType> = {
            loading: false,
            error: '',
            commites: [],
        }
        expect(commitesReducer(state as CommitesType, getCommitesData.pending)).toEqual({
            loading: true,
            error: '',
            commites: [],
        })
    })

    test('test get commites data fullfiled', () => {
        const state: DeepPartial<CommitesType> = {
            loading: false,
            error: '',
            commites: [],
        }
        expect(
            commitesReducer(
                state as CommitesType,
                getCommitesData.fulfilled(data, '', { login: 'Qbic', reposName: 'Qbic' }),
            ),
        ).toEqual({
            loading: false,
            error: '',
            commites: [...data],
        })
    })
})
