import { useSelector } from 'react-redux'

import { CommitInfo } from 'entities/CommitInfo'
import {
  CommitsTable,
  getCommitesStateData,
  getCommitesStateError,
  getCommitesStateLoading,
} from 'features/GetCommits'
import { Loader } from 'shared/ui/Loader/Loader'
import { getReposState } from 'features/GetRepos'

export const CommitsWidget = () => {
  const { reposName } = useSelector(getReposState)
  const commites = useSelector(getCommitesStateData)
  const loading = useSelector(getCommitesStateLoading)
  const error = useSelector(getCommitesStateError)

  if (loading) {
    return (
      <div className="flex items-center justify-start flex-col w-full max-w-6xl h-4/5 p-8 gap-8 border rounded-lg shadow bg-gray-800 border-gray-700">
        <CommitInfo reposName={reposName} />
        <Loader />
      </div>
    )
  } else if (error) {
    return (
      <div className="flex items-center justify-start flex-col w-full max-w-6xl h-4/5 p-8 gap-8 border rounded-lg shadow bg-gray-800 border-gray-700">
        <CommitInfo reposName={reposName} />
        <div className="text-3xl text-center font-medium text-gray-200">{error}</div>
      </div>
    )
  } else {
    return (
      <div className="flex items-center justify-start flex-col w-full max-w-6xl h-4/5 p-8 gap-8 border rounded-lg shadow bg-gray-800 border-gray-700">
        <CommitInfo reposName={reposName} />
        <CommitsTable commites={commites} />
      </div>
    )
  }
}
