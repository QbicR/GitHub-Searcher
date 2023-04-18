import { getUserState } from './getUserState'
import { StateSchema } from 'app/providers/StoreProvider'

describe('getUserState.test', () => {
    test('should return userData state', () => {
        const state: DeepPartial<StateSchema> = {
            userData: {
                searchValue: 'Qbic',
                id: 3452,
                login: 'Qbic',
                avatar_url: 'www.Qbic.com',
                loading: false,
                error: 'error',
            },
        }
        expect(getUserState(state as StateSchema)).toEqual({
            searchValue: 'Qbic',
            id: 3452,
            login: 'Qbic',
            avatar_url: 'www.Qbic.com',
            loading: false,
            error: 'error',
        })
    })
    test('should return search value', () => {
        const state: DeepPartial<StateSchema> = {
            userData: {
                searchValue: 'Qbic',
            },
        }
        expect(getUserState(state as StateSchema)).toEqual({
            searchValue: 'Qbic',
        })
    })
    test('should return user info', () => {
        const state: DeepPartial<StateSchema> = {
            userData: {
                id: 3452,
                login: 'Qbic',
                avatar_url: 'www.Qbic.com',
            },
        }
        expect(getUserState(state as StateSchema)).toEqual({
            id: 3452,
            login: 'Qbic',
            avatar_url: 'www.Qbic.com',
        })
    })
    test('should return loading', () => {
        const state: DeepPartial<StateSchema> = {
            userData: {
                loading: true,
            },
        }
        expect(getUserState(state as StateSchema)).toEqual({
            loading: true,
        })
    })
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            userData: {
                error: 'error',
            },
        }
        expect(getUserState(state as StateSchema)).toEqual({
            error: 'error',
        })
    })
    test('should work with empty userData state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getUserState(state as StateSchema)).toEqual(undefined)
    })
})
