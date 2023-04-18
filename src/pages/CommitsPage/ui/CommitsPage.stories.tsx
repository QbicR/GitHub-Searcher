import { StoryFn, Meta } from '@storybook/react'

import CommitsPage from './CommitsPage'
import { CommitType } from 'features/GetCommits/model/types/commitType'
import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'pages/CommitsPage',
    component: CommitsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as Meta<typeof CommitsPage>

const commites: CommitType[] = [
    { sha: '1234', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '12345', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '123456', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '1234567', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '12345678', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '123456789', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
]

const Template: StoryFn<typeof CommitsPage> = () => <CommitsPage />

export const WithEmpryValues = Template.bind({})
WithEmpryValues.decorators = [
    StoreDecorator({
        userData: {
            login: '',
            searchValue: '',
        },
    }),
]

export const WithValues = Template.bind({})
WithValues.decorators = [
    StoreDecorator({
        userData: {
            login: 'QbicR',
            searchValue: 'QbicR',
        },
        commitesData: {
            commites: commites,
        },
        reposData: {
            reposName: 'Reposity №1',
        },
    }),
]

export const WithCommitesLoading = Template.bind({})
WithCommitesLoading.decorators = [
    StoreDecorator({
        userData: {
            login: 'QbicR',
            searchValue: 'QbicR',
        },
        commitesData: {
            loading: true,
        },
        reposData: {
            reposName: 'Reposity №1',
        },
    }),
]

export const WithCommitesError = Template.bind({})
WithCommitesError.decorators = [
    StoreDecorator({
        userData: {
            login: 'QbicR',
            searchValue: 'QbicR',
        },
        commitesData: {
            error: 'Коммиты не найдены. Репозиторий пуст.',
        },
        reposData: {
            reposName: 'Reposity №1',
        },
    }),
]
