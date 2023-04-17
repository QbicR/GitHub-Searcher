import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ReposWidget } from 'widgets/ReposWidget'
import { Search, getUserState } from 'entities/Search'
import { RoutePath } from 'shared/config/RouterConfig/RouterConfig'
import { Loader } from 'shared/ui/Loader/Loader'

const ReposPage = () => {
    const userData = useSelector(getUserState)
    const { searchValue } = userData
    const navigate = useNavigate()

    useEffect(() => {
        if (searchValue.length === 0) {
            navigate(RoutePath.main, { replace: true })
        }
    }, [])

    let content
    if (searchValue.length === 0) {
        content = (
            <div className="flex flex-col gap-y-10 items-center justify-center bg-slate-800 p-6 w-full h-screen ring-slate-900/5 shadow-xl">
                <Loader />
            </div>
        )
    } else {
        content = (
            <div className="flex flex-col gap-y-10 items-center justify-center bg-slate-800 p-6 w-full h-screen ring-slate-900/5 shadow-xl">
                <Search />
                <ReposWidget />
            </div>
        )
    }

    return <>{content}</>
}

export default ReposPage
