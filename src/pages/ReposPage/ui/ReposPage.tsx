import { Search } from 'entities/Search'
import { ReposWidget } from 'widgets/ReposWidget'

const ReposPage = () => {
    return (
        <div className="flex flex-col gap-y-10 items-center justify-center bg-slate-800 p-6 w-full h-screen ring-slate-900/5 shadow-xl">
            <Search />
            <ReposWidget />
        </div>
    )
}

export default ReposPage
