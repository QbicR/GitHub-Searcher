import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { getUserState } from 'entities/Search'
import { UserInfo } from 'entities/UserInfo'
import { ReposTable, getReposState } from 'features/GetRepos'
import { Loader } from 'shared/ui/Loader/Loader'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/RouterConfig/RouterConfig'

export const ReposWidget = memo(() => {
    const userData = useSelector(getUserState)
    const reposData = useSelector(getReposState)
    const navigate = useNavigate()
    const { login, avatar_url, error: userError, searchValue } = userData
    const { repositoties, loading: reposLodaing } = reposData

    useEffect(() => {
        if (searchValue.length === 0) {
            navigate(RoutePath.main)
        }
    }, [searchValue, navigate])

    let content
    if (reposLodaing) {
        content = (
            <div className="flex items-center justify-center flex-col w-full max-w-6xl h-4/5 p-8 gap-8  border rounded-lg shadow bg-gray-800 border-gray-700">
                <Loader />
            </div>
        )
    } else if (userError) {
        content = (
            <div className="flex items-center justify-center flex-col w-full max-w-6xl h-4/5 p-8 gap-8 border rounded-lg shadow bg-gray-800 border-gray-700">
                <div className="text-3xl text-center font-medium text-gray-200">{userError}</div>
            </div>
        )
    } else {
        content = (
            <div className="flex items-center justify-start flex-col w-full max-w-6xl h-4/5 p-8 gap-8  border rounded-lg shadow bg-gray-800 border-gray-700">
                <UserInfo login={login} avatar={avatar_url} />
                <ReposTable login={login} repositoties={repositoties} />
            </div>
        )
    }

    return <>{content}</>
})
