import { Suspense, useEffect } from 'react'
import './styles/index.css'
import { AppRouter } from './providers/RouterProvider'
import { MainPage } from 'pages/MainPage'

const App = () => {
    useEffect(() => {
        if (Math.random() < 0.5) {
            throw new Error('error')
        }
    }, [])

    return (
        <div>
            <Suspense fallback="">
                <AppRouter />
            </Suspense>
        </div>
    )
}

export default App
