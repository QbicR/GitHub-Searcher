import React, { memo } from 'react'

import { CommitType } from '../../model/types/commitType'

interface Props {
    commites: CommitType[]
}

export const TableBody: React.FC<Props> = memo((props) => {
    const { commites } = props

    return (
        <tbody>
            {commites.map((commit, index) => (
                <tr
                    key={commit.sha}
                    className={`border-b border-gray-700 ${
                        index % 2 === 0 ? ' bg-gray-900' : ' bg-gray-800'
                    }`}
                >
                    <td className="px-6 py-5">{commit.commit.author.name}</td>
                    <td className="px-6 py-5">{commit.sha}</td>
                    <td className="px-6 py-5 ">{commit.commit.author.date.slice(0, 10)}</td>
                </tr>
            ))}
        </tbody>
    )
})
