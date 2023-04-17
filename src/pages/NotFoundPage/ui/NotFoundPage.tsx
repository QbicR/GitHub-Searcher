import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/RouterConfig/RouterConfig'

const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center   bg-slate-800 p-6 w-full h-screen ring-slate-900/5 shadow-xl">
            <div className="flex flex-col items-center text-center justify-start w-full max-w-6xl gap-5 px-4">
                <h3 className="mb-1 text-xl  font-medium  text-gray-300">
                    К сожалению, вы зашли на несуществующую страницу. Возможно, вы перешли по старой
                    ссылке или ввели неправильный адрес.
                </h3>
                <h3 className="mb-1 text-lg font-medium  text-gray-300">
                    Попробуйте проверить ссылку или вернитесь на главную страницу.
                </h3>
                <button
                    onClick={() => navigate(RoutePath.main)}
                    className="py-3 px-8 ml-4 text-lg border-2 text-gray-200 rounded-lg border-blue-600 bg-blue-600 hover:bg-blue-700 focus:bg-blue-800"
                >
                    На главную
                </button>
            </div>
        </div>
    )
}

export default NotFoundPage
