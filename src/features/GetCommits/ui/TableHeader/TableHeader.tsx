import { memo } from 'react'

const tableHeader = [
    { id: 1, name: 'Автор коммита' },
    { id: 2, name: 'Хеш коммита' },
    { id: 3, name: 'Дата коммита' },
]

export const TableHeader = memo(() => {
    return (
        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
                {tableHeader.map((header) => (
                    <th key={header.id} scope="col" className="px-6 py-5 w-1/4">
                        {header.name}
                    </th>
                ))}
            </tr>
        </thead>
    )
})
