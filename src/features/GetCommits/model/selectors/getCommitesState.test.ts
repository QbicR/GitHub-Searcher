import { StateSchema } from 'app/providers/StoreProvider'
import { getCommitesState } from './getCommitesState'
import { CommitType } from '../types/commitType'

const commites: CommitType[] = [
    { sha: '1234', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '12345', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '123456', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '1234567', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '12345678', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '123456789', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
]

describe('getCommitesState.test', () => {
    test('should return commitesData state', () => {
        const state: DeepPartial<StateSchema> = {
            commitesData: {
                commites: commites,
                loading: false,
                error: 'error',
            },
        }
        expect(getCommitesState(state as StateSchema)).toEqual({
            commites: commites,
            loading: false,
            error: 'error',
        })
    })
    test('should return commites', () => {
        const state: DeepPartial<StateSchema> = {
            commitesData: {
                commites: commites,
            },
        }
        expect(getCommitesState(state as StateSchema)).toEqual({
            commites: commites,
        })
    })
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            commitesData: {
                error: 'error',
            },
        }
        expect(getCommitesState(state as StateSchema)).toEqual({
            error: 'error',
        })
    })
    test('should return loading', () => {
        const state: DeepPartial<StateSchema> = {
            commitesData: {
                loading: true,
            },
        }
        expect(getCommitesState(state as StateSchema)).toEqual({
            loading: true,
        })
    })
    test('should work with empty commitesData state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getCommitesState(state as StateSchema)).toEqual(undefined)
    })
})
