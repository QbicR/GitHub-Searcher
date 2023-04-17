import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getUserInfo, getUserState } from 'entities/Search'
import { UserInfo } from 'entities/UserInfo'
import { ReposTable, getReposData, getReposState } from 'features/GetRepos'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { RoutePath } from 'shared/config/RouterConfig/RouterConfig'
import { Loader } from 'shared/ui/Loader/Loader'

export const ReposWidget = () => {
    const userData = useSelector(getUserState)
    const reposData = useSelector(getReposState)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { login, avatar_url, error: userError } = userData
    const { repositoties, loading: reposLodaing } = reposData

    const user = localStorage.getItem('user')

    useEffect(() => {
        dispatch(getUserInfo({ login: user }))
        dispatch(getReposData({ login: user }))
        navigate(`../${user}${RoutePath.repos}`)
    }, [dispatch, navigate, user])

    let content
    if (reposLodaing) {
        content = (
            <div className="flex items-center justify-center flex-col w-full max-w-6xl h-4/5 p-8 gap-8  border rounded-lg shadow bg-gray-800 border-gray-700">
                <Loader />
            </div>
        )
    } else if (userError) {
        content = (
            <div className="flex items-center justify-center flex-col w-full max-w-6xl h-4/5 p-8 gap-8  border rounded-lg shadow bg-gray-800 border-gray-700">
                <div className="text-3xl font-medium text-gray-200">{userError}</div>
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
}
