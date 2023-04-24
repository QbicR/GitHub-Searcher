import { TableBody } from '../TableBody/TableBody'
import { CommitType } from '../../model/types/commitType'
import { TableHeader } from 'entities/Table'
import { commitesTableHeader } from 'shared/const/mockDataForTests'

interface Props {
    commites: CommitType[]
}

export const CommitsTable: React.FC<Props> = (props) => {
    const { commites } = props
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full max-w-6xl max-h-max scrollbar-x">
            <table className="w-full text-sm text-left  text-gray-400">
                <TableHeader tableHeader={commitesTableHeader} />
                <TableBody commites={commites} />
            </table>
        </div>
    )
}
