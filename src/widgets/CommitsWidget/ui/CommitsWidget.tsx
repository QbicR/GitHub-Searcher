import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { CommitInfo } from 'entities/CommitInfo'
import { CommitsTable, getCommitesData, getCommitesState } from 'features/GetCommits'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { Loader } from 'shared/ui/Loader/Loader'

export const CommitsWidget = () => {
    const dispatch = useAppDispatch()
    const { user, repos_name } = useParams()

    const { commites, loading, error } = useSelector(getCommitesState)

    useEffect(() => {
        dispatch(getCommitesData({ login: user, reposName: repos_name }))
    }, [])

    let content
    if (loading) {
        content = (
            <div className="flex items-center justify-center flex-col w-full max-w-6xl h-4/5 p-8 gap-8  border rounded-lg shadow bg-gray-800 border-gray-700">
                <Loader />
            </div>
        )
    } else if (error) {
        content = (
            <div className="flex items-center justify-center flex-col w-full max-w-6xl h-4/5 p-8 gap-8  border rounded-lg shadow bg-gray-800 border-gray-700">
                <div className="text-3xl text-center font-medium text-gray-200">{error}</div>
            </div>
        )
    } else {
        content = (
            <>
                <CommitsTable commites={commites} />
            </>
        )
    }

    return (
        <div className="flex items-center justify-start flex-col w-full max-w-6xl h-4/5 p-8 gap-8 border rounded-lg shadow bg-gray-800 border-gray-700">
            <CommitInfo reposName={repos_name} />
            {content}
        </div>
    )
}
