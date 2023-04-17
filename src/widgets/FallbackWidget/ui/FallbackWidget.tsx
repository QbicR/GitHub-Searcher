import { Loader } from 'shared/ui/Loader/Loader'

export const FallbackWidget = () => {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-slate-800">
            <Loader />
        </div>
    )
}
