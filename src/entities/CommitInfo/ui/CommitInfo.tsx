import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
    reposName: string
}

export const CommitInfo: React.FC<Props> = memo((props) => {
    const { reposName } = props
    const navigate = useNavigate()

    return (
        <div className="flex items-center justify-start w-full max-w-6xl gap-10 px-4">
            <button
                onClick={() => navigate(-1)}
                className="py-2 px-6 ml-4 text-lg border-2 text-gray-200 rounded-lg border-blue-600 bg-blue-600 hover:bg-blue-700 focus:bg-blue-800"
            >
                Назад
            </button>
            <h5 className="flex items-center text-3xl font-medium text-gray-200 h-20">
                {reposName}
            </h5>
        </div>
    )
})
