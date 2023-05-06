// import { getCommitesState } from './getCommitesState'
// import { StateSchema } from 'app/providers/StoreProvider'
// import { commites } from 'shared/const/mockDataForTests'

// describe('getCommitesState.test', () => {
//     test('should return commitesData state', () => {
//         const state: DeepPartial<StateSchema> = {
//             commitesData: {
//                 commites: commites,
//                 loading: false,
//                 error: 'error',
//             },
//         }
//         expect(getCommitesState(state as StateSchema)).toEqual({
//             commites: commites,
//             loading: false,
//             error: 'error',
//         })
//     })
//     test('should return commites', () => {
//         const state: DeepPartial<StateSchema> = {
//             commitesData: {
//                 commites: commites,
//             },
//         }
//         expect(getCommitesState(state as StateSchema)).toEqual({
//             commites: commites,
//         })
//     })
//     test('should return error', () => {
//         const state: DeepPartial<StateSchema> = {
//             commitesData: {
//                 error: 'error',
//             },
//         }
//         expect(getCommitesState(state as StateSchema)).toEqual({
//             error: 'error',
//         })
//     })
//     test('should return loading', () => {
//         const state: DeepPartial<StateSchema> = {
//             commitesData: {
//                 loading: true,
//             },
//         }
//         expect(getCommitesState(state as StateSchema)).toEqual({
//             loading: true,
//         })
//     })
//     test('should work with empty commitesData state', () => {
//         const state: DeepPartial<StateSchema> = {}
//         expect(getCommitesState(state as StateSchema)).toEqual(undefined)
//     })
// })
