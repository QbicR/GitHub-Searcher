import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { RepositoryType } from '../../model/types/repositoryType'
import { RoutePath } from 'shared/config/RouterConfig/RouterConfig'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { getCommitesData } from 'features/GetCommits'

interface Props {
    repositories: RepositoryType[]
    login: string
}

export const TableBody: React.FC<Props> = memo((props) => {
    const { repositories, login } = props
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleGetCommitesData = (name: string) => {
        dispatch(getCommitesData({ login, reposName: name }))
        navigate(`../${login}${RoutePath.commits}${name}/commits`)
    }

    return (
        <tbody>
            {repositories.map((repo, index) => (
                <tr
                    key={repo.id}
                    className={`border-b border-gray-700 ${
                        index % 2 === 0 ? ' bg-gray-900' : ' bg-gray-800'
                    }`}
                >
                    <td
                        onClick={() => handleGetCommitesData(repo.name)}
                        className="px-6 py-5 cursor-pointer text-white"
                    >
                        {repo.name}
                    </td>
                    <td className="px-6 py-5">{repo.language}</td>
                    <td className="px-6 py-5 max-w-xs break-words">{repo.description}</td>
                    <td className="px-6 py-5">{repo.stargazers_count}</td>
                </tr>
            ))}
        </tbody>
    )
})
