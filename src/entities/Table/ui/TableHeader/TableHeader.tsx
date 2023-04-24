import React from 'react'

interface Props {
    tableHeader: { id: number; name: string }[]
}

export const TableHeader: React.FC<Props> = (props) => {
    const { tableHeader } = props

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
}
