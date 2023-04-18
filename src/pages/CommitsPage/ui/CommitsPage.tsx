import { Search, getUserState } from 'entities/Search'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/RouterConfig/RouterConfig'
import { Loader } from 'shared/ui/Loader/Loader'
import { CommitsWidget } from 'widgets/CommitsWidget'

const CommitsPage = () => {
    const userData = useSelector(getUserState)
    const { searchValue, login } = userData
    const navigate = useNavigate()

    const isEmpty = searchValue.length === 0 && login.length === 0

    useEffect(() => {
        if (isEmpty) {
            navigate(RoutePath.main, { replace: true })
        }
    }, [])

    if (isEmpty) {
        return (
            <div className="flex flex-col gap-y-10 items-center justify-center bg-slate-800 p-6 w-full h-screen ring-slate-900/5 shadow-xl">
                <Loader />
            </div>
        )
    } else {
        return (
            <div className="flex flex-col gap-y-10 items-center justify-center bg-slate-800 p-6 w-full h-screen ring-slate-900/5 shadow-xl">
                <Search />
                <CommitsWidget />
            </div>
        )
    }
}

export default CommitsPage
