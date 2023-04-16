import { UserInfo } from 'entities/UserInfo'
import { ReposTable } from 'features/GetRepos'

export const ReposWidget = () => {
    return (
        <div className="flex flex-col w-full max-w-6xl h-4/5 p-8 gap-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <UserInfo />
            <ReposTable />
        </div>
    )
}
