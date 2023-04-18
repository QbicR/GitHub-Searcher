import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { CommitInfo } from 'entities/CommitInfo'
import { CommitsTable, getCommitesState } from 'features/GetCommits'
import { Loader } from 'shared/ui/Loader/Loader'

export const CommitsWidget = () => {
    const { repos_name } = useParams()
    const { commites, loading, error } = useSelector(getCommitesState)

    if (loading) {
        return (
            <div className="flex items-center justify-start flex-col w-full max-w-6xl h-4/5 p-8 gap-8 border rounded-lg shadow bg-gray-800 border-gray-700">
                <CommitInfo reposName={repos_name} />
                <Loader />
            </div>
        )
    } else if (error) {
        return (
            <div className="flex items-center justify-start flex-col w-full max-w-6xl h-4/5 p-8 gap-8 border rounded-lg shadow bg-gray-800 border-gray-700">
                <CommitInfo reposName={repos_name} />
                <div className="text-3xl text-center font-medium text-gray-200">{error}</div>
            </div>
        )
    } else {
        return (
            <div className="flex items-center justify-start flex-col w-full max-w-6xl h-4/5 p-8 gap-8 border rounded-lg shadow bg-gray-800 border-gray-700">
                <CommitInfo reposName={repos_name} />
                <CommitsTable commites={commites} />
            </div>
        )
    }
}
