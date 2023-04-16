import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/RouterConfig/RouterConfig'

export const Search = () => {
    const navigate = useNavigate()

    const user = 'qbic'

    return (
        <div className="flex items-center w-full max-w-6xl">
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-gray-500 dark:text-gray-400"
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
                    type="text"
                    id="voice-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-16 p-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Найти GitHub пользователя..."
                    required
                />
            </div>
            <button
                onClick={() => navigate(`../${user}${RoutePath.repos}`)}
                className="inline-flex items-center py-4 px-10 ml-4 text-lg font-medium text-gray-300 bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:bg-blue-800"
            >
                Поиск
            </button>
        </div>
    )
}
