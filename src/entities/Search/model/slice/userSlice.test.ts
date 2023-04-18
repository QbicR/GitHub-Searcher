import { userAction, userReducer } from './userSlice'
import { UserType } from '../types/userTypes'
import { getUserInfo } from '../services/getUserInfo'

const data: UserType = {
    id: 3452,
    login: 'Qbic',
    avatar_url: 'www.Qbic.com',
    loading: true,
    error: '',
    searchValue: '',
}

describe('userSlice.test', () => {
    test('test set search value', () => {
        const action = userAction.setSearchValue('Qbic')
        const state = { ...data, searchValue: '' }
        const expectedState = { ...data, searchValue: 'Qbic' }
        expect(userReducer(state, action)).toEqual(expectedState)
    })

    test('test get user info pending', () => {
        const action = { type: getUserInfo.pending.type }
        const state = userReducer(data, action)
        expect(state).toEqual({
            loading: true,
            error: '',
            id: null,
            login: '',
            avatar_url: '',
            searchValue: '',
        })
    })

    test('test get user info fullfiled', () => {
        const action = { type: getUserInfo.fulfilled.type, payload: data }
        const state = userReducer(data, action)
        expect(state).toEqual({
            loading: false,
            error: '',
            id: data.id,
            login: data.login,
            avatar_url: data.avatar_url,
            searchValue: '',
        })
    })

    test('test get user info fullfiled', () => {
        const action = { type: getUserInfo.rejected.type, payload: { error: 'error' } }
        const state = userReducer(data, action)
        expect(state).toEqual({
            error: action.payload,
            loading: false,
            id: null,
            login: '',
            avatar_url: '',
            searchValue: '',
        })
    })
})
