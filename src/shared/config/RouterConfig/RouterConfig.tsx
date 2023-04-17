import { RouteProps } from 'react-router-dom'

import { MainPage } from 'pages/MainPage'
import { ReposPage } from 'pages/ReposPage'
import { CommitsPage } from 'pages/CommitsPage'
import { NotFoundPage } from 'pages/NotFoundPage'

export enum AppRoutes {
    MAIN = 'main',
    REPOS = 'repos',
    COMMITS = 'commits',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.REPOS]: '/repos',
    [AppRoutes.COMMITS]: '/repos/',

    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.REPOS]: {
        path: `:user${RoutePath.repos}`,
        element: <ReposPage />,
    },
    [AppRoutes.COMMITS]: {
        path: `:user${RoutePath.commits}:repos_name/commits`,
        element: <CommitsPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
}
