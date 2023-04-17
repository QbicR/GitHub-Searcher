import { TableHeader } from '../TableHeader/TableHeader'
import { TableBody } from '../TableBody/TableBody'
import { RepositoryType } from 'features/GetRepos/model/types/repositoryType'

interface Props {
    repositoties: RepositoryType[]
    login: string
}

export const ReposTable: React.FC<Props> = (props) => {
    const { repositoties, login } = props

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full max-w-6xl max-h-max scrollbar-x">
            <table className="w-full text-sm text-left text-gray-400">
                <TableHeader />
                <TableBody login={login} repositoties={repositoties} />
            </table>
        </div>
    )
}
