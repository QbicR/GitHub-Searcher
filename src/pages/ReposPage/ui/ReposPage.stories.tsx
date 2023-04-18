import { StoryFn, Meta } from '@storybook/react'

import ReposPage from './ReposPage'
import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { RepositoryType } from 'features/GetRepos/model/types/repositoryType'
import avatar from 'shared/assets/tests/storybook/avatar.jpg'

export default {
    title: 'pages/ReposPage',
    component: ReposPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as Meta<typeof ReposPage>

const repositories: RepositoryType[] = [
    { id: 1234, name: '1234', language: 'TS', description: 'rep 1', stargazers_count: 10 },
    { id: 12345, name: '12345', language: 'TS', description: 'rep 12', stargazers_count: 11 },
    { id: 123456, name: '123456', language: 'TS', description: 'rep 123', stargazers_count: 12 },
    { id: 1234567, name: '1234567', language: 'TS', description: 'rep 1234', stargazers_count: 13 },
    {
        id: 12345678,
        name: '12345678',
        language: 'TS',
        description: 'rep 12345',
        stargazers_count: 14,
    },
    {
        id: 123456789,
        name: '123456789',
        language: 'TS',
        description: 'rep 123456',
        stargazers_count: 15,
    },
]

const Template: StoryFn<typeof ReposPage> = () => <ReposPage />

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
            avatar_url: avatar,
        },
        reposData: {
            repositories: repositories,
        },
    }),
]

export const WithRepositoriesLoading = Template.bind({})
WithRepositoriesLoading.decorators = [
    StoreDecorator({
        userData: {
            login: 'QbicR',
            searchValue: 'QbicR',
            avatar_url: avatar,
        },
        reposData: {
            loading: true,
        },
    }),
]

export const WithRepositoriesError = Template.bind({})
WithRepositoriesError.decorators = [
    StoreDecorator({
        userData: {
            login: 'QbicR',
            searchValue: 'QbicR',
            avatar_url: avatar,
            error: 'Пользователь не найден. Проверьте правильность введенных данных.',
        },
    }),
]
