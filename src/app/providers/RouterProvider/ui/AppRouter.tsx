import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { FallbackWidget } from 'widgets/FallbackWidget'
import { routeConfig } from 'shared/config/RouterConfig/RouterConfig'

export const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={
                    <Suspense fallback={<FallbackWidget />}>
                        <div>{element}</div>
                    </Suspense>
                }
            />
        ))}
    </Routes>
)
