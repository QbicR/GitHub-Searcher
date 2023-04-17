export const ErrorWidget = () => {
    const reloadPage = () => {
        window.location.reload()
    }

    return (
        <div className="flex flex-col gap-10 items-center justify-center   bg-slate-800 p-6 w-full h-screen ring-slate-900/5 shadow-xl">
            <p className="mb-1 text-3xl  font-medium text-gray-300">
                Произошла непредвиденная ошибка
            </p>
            <button
                onClick={reloadPage}
                className="py-3 px-8 ml-4 text-lg border-2 text-gray-200 rounded-lg border-blue-600 bg-blue-600 hover:bg-blue-700 focus:bg-blue-800"
            >
                Обновить страницу
            </button>
        </div>
    )
}
