import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RoutePath } from 'shared/config/RouterConfig/RouterConfig'

export const UserInfo = () => {
    const navigate = useNavigate()
    const userR = 'qbic'
    const { user } = useParams()

    return (
        <div className="flex items-center justify-start w-full max-w-6xl gap-10 px-4 h-20">
            <div
                onClick={() => navigate(`../${userR}${RoutePath.commits}heLLoA/commits`)}
                className="w-20 h-20 rounded-full shadow-lg bg-gray-100"
            ></div>
            <h5 className="text-3xl font-medium text-gray-900 dark:text-gray-200">{user}</h5>
        </div>
    )
}
