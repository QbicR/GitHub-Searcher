import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const CommitInfo = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    return (
        <div className="flex items-center justify-start w-full max-w-6xl gap-10 px-4">
            <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-300 bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:bg-blue-800"
            >
                Назад
            </button>
            <h5 className="flex items-center text-3xl font-medium text-gray-900 dark:text-gray-200 h-20">
                {id}
            </h5>
        </div>
    )
}
