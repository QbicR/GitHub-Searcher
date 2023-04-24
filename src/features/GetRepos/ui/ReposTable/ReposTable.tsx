import { TableHeader } from 'entities/Table'
import { RepositoryType } from '../../model/types/repositoryType'
import { TableBody } from '../TableBody/TableBody'

const tableHeader = [
    { id: 1, name: 'Наименование' },
    { id: 2, name: 'Язык программирования' },
    { id: 3, name: 'Описание' },
    { id: 4, name: 'Количество звезд' },
]

interface Props {
    repositories: RepositoryType[]
    login: string
}

export const ReposTable: React.FC<Props> = (props) => {
    const { repositories, login } = props

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full max-w-6xl max-h-max scrollbar-x">
            <table className="w-full text-sm text-left text-gray-400">
                <TableHeader tableHeader={tableHeader} />
                <TableBody login={login} repositories={repositories} />
            </table>
        </div>
    )
}
