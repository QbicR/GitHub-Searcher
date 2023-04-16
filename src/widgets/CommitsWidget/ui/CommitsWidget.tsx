import { CommitInfo } from 'entities/CommitInfo'
import { CommitsTable } from 'features/GetCommits'

export const CommitsWidget = () => {
    return (
        <div className="flex flex-col w-full max-w-6xl h-4/5 p-8 gap-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <CommitInfo />
            <CommitsTable />
        </div>
    )
}
