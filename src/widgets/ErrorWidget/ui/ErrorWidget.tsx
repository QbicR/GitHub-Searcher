import React from 'react'

export const ErrorWidget = () => {
    const reloadPage = () => {
        window.location.reload()
    }

    return (
        <div className="flex flex-col gap-10 items-center justify-center  bg-white dark:bg-slate-800 p-6 w-full h-screen ring-slate-900/5 shadow-xl">
            <p className="mb-1 text-3xl  font-medium text-gray-900 dark:text-gray-300">
                Произошла непредвиденная ошибка
            </p>
            <button
                className="inline-flex items-center py-4 px-10 ml-4 text-lg font-medium text-gray-300 bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:bg-blue-800"
                onClick={reloadPage}
            >
                Обновить страницу
            </button>
        </div>
    )
}
