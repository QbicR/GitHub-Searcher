import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getUserInfo } from '../../model/services/getUserInfo'
import { getUserState } from '../../model/selectors/getUserState'
import { RoutePath } from 'shared/config/RouterConfig/RouterConfig'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { getReposData } from 'features/GetRepos'
import { userAction } from 'entities/Search/model/slice/userSlice'

export const Search = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { searchValue } = useSelector(getUserState)

    const changeSearchValue = (value: string) => {
        dispatch(userAction.setSearchValue(value))
    }

    const search = useCallback(() => {
        if (searchValue.trim() !== '') {
            dispatch(getUserInfo({ login: searchValue }))
            dispatch(getReposData({ login: searchValue }))
            navigate(`../${searchValue}${RoutePath.repos}`, { replace: true })
        }
    }, [dispatch, navigate, searchValue])

    const handleKeyUp = useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter') {
                search()
            }
        },
        [search],
    )

    return (
        <div className="flex items-center w-full max-w-6xl" onKeyUp={handleKeyUp} tabIndex={0}>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
                <input
                    spellCheck="false"
                    onChange={(e) => changeSearchValue(e.target.value)}
                    value={searchValue}
                    type="text"
                    className="text-lg rounded-lg w-full pl-16 p-3 border-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-300 focus:border-blue-600"
                    placeholder="Найти GitHub пользователя..."
                    autoFocus={true}
                />
            </div>
            <button
                disabled={searchValue.trim() === ''}
                onClick={search}
                className="py-3 px-8 ml-4 text-lg border-2 text-gray-200 rounded-lg border-blue-600 bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 disabled:bg-blue-500 disabled:cursor-not-allowed"
            >
                Найти
            </button>
        </div>
    )
}
