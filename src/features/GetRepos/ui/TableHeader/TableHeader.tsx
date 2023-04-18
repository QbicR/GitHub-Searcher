import { memo } from 'react'

const tableHeader = [
    { id: 1, name: 'Наименование' },
    { id: 2, name: 'Язык программирования' },
    { id: 3, name: 'Описание' },
    { id: 4, name: 'Количество звезд' },
]

export const TableHeader = memo(() => {
    return (
        <thead className="text-xs uppercase tracking-wider bg-gray-700 text-gray-400">
            <tr>
                {tableHeader.map((header) => (
                    <th key={header.id} scope="col" className="px-6 py-5">
                        {header.name}
                    </th>
                ))}
            </tr>
        </thead>
    )
})
