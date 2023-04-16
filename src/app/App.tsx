import { Suspense } from 'react'

import './styles/index.css'
import { AppRouter } from './providers/RouterProvider'
import { FallbackWidget } from 'widgets/FallbackWidget'

const App = () => {
    return (
        <Suspense fallback={<FallbackWidget />}>
            <AppRouter />
        </Suspense>
    )
}

export default App
