import { Search } from 'entities/Search'
import { CommitsWidget } from 'widgets/CommitsWidget'

const CommitsPage = () => {
    return (
        <div className="flex flex-col gap-y-10 items-center justify-center bg-slate-800 p-6 w-full h-screen ring-slate-900/5 shadow-xl">
            <Search />
            <CommitsWidget />
        </div>
    )
}

export default CommitsPage
