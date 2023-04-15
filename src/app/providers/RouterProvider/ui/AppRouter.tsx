import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/RouterConfig/RouterConfig'

export const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={
                    <Suspense fallback="">
                        <div>{element}</div>
                    </Suspense>
                }
            />
        ))}
    </Routes>
)
