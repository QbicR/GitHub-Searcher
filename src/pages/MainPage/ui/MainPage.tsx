import { Search } from 'entities/Search'
import React from 'react'

const MainPage = () => {
    return (
        <div className="flex items-center justify-center  bg-white dark:bg-slate-800 p-6 w-full h-screen ring-slate-900/5 shadow-xl">
            <Search />
        </div>
    )
}

export default MainPage
