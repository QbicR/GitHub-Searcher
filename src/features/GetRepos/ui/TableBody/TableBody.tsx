import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { RepositoryType } from '../../model/types/repositoryType'
import { RoutePath } from 'shared/config/RouterConfig/RouterConfig'

interface Props {
    repositoties: RepositoryType[]
    login: string
}

export const TableBody: React.FC<Props> = memo((props) => {
    const { repositoties, login } = props
    const navigate = useNavigate()

    return (
        <tbody>
            {repositoties.map((repo, index) => (
                <tr
                    key={repo.id}
                    className={`border-b border-gray-700 ${
                        index % 2 === 0 ? ' bg-gray-900' : ' bg-gray-800'
                    }`}
                >
                    <td
                        onClick={() =>
                            navigate(`../${login}${RoutePath.commits}${repo.name}/commits`)
                        }
                        className="px-6 py-5 cursor-pointer text-white"
                    >
                        {repo.name}
                    </td>
                    <td className="px-6 py-5">{repo.language}</td>
                    <td className="px-6 py-5">{repo.description}</td>
                    <td className="px-6 py-5">{repo.stargazers_count}</td>
                </tr>
            ))}
        </tbody>
    )
})
