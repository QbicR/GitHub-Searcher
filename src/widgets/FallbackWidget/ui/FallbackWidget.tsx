import { Loader } from 'shared/ui/Loader/Loader'

export const FallbackWidget = () => {
    return (
        <div className="w-full h-screen bg-slate-800">
            <div className="flex items-center justify-center flex-col w-full max-w-6xl h-4/5 p-8 gap-8  border rounded-lg shadow bg-gray-800 border-gray-700">
                <Loader />
            </div>
        </div>
    )
}
