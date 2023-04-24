import { TableHeader } from 'entities/Table'
import { RepositoryType } from '../../model/types/repositoryType'
import { TableBody } from '../TableBody/TableBody'
import { reposTableHeader } from 'shared/const/mockDataForTests'

interface Props {
    repositories: RepositoryType[]
    login: string
}

export const ReposTable: React.FC<Props> = (props) => {
    const { repositories, login } = props

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full max-w-6xl max-h-max scrollbar-x">
            <table className="w-full text-sm text-left text-gray-400">
                <TableHeader tableHeader={reposTableHeader} />
                <TableBody login={login} repositories={repositories} />
            </table>
        </div>
    )
}
