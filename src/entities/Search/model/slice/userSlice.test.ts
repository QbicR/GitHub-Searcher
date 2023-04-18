import { UserType } from '../types/userTypes'
import { userAction, userReducer } from './userSlice'
import { getUserInfo } from '../services/getUserInfo'

const data = {
    id: 3452,
    login: 'Qbic',
    avatar_url: 'www.Qbic.com',
    searchValue: '',
    loading: true,
    error: 'error',
    message: '',
}

describe('userSlice.test', () => {
    test('test set search value', () => {
        const state: DeepPartial<UserType> = { searchValue: '' }
        expect(userReducer(state as UserType, userAction.setSearchValue('Qbic'))).toEqual({
            searchValue: 'Qbic',
        })
    })

    test('test get user info pending', () => {
        const state: DeepPartial<UserType> = {
            loading: false,
            error: '',
            id: null,
            login: '',
            avatar_url: '',
        }
        expect(userReducer(state as UserType, getUserInfo.pending)).toEqual({
            loading: true,
            error: '',
            id: null,
            login: '',
            avatar_url: '',
        })
    })

    test('test get user info fullfiled', () => {
        const state: DeepPartial<UserType> = {
            loading: true,
        }
        expect(
            userReducer(state as UserType, getUserInfo.fulfilled(data, '', { login: 'Qbic' })),
        ).toEqual({
            loading: false,
            error: '',
            id: data.id,
            login: data.login,
            avatar_url: data.avatar_url,
        })
    })
})
