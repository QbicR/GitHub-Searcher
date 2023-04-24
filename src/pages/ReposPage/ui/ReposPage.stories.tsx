import { StoryFn, Meta } from '@storybook/react'

import ReposPage from './ReposPage'
import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import avatar from 'shared/assets/tests/storybook/avatar.jpg'
import { repositories } from 'shared/const/mockDataForTests'

export default {
    title: 'pages/ReposPage',
    component: ReposPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as Meta<typeof ReposPage>

const Template: StoryFn<typeof ReposPage> = () => <ReposPage />

export const Normal = Template.bind({})
Normal.decorators = [
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

export const WithEmptyRepos = Template.bind({})
WithEmptyRepos.decorators = [
    StoreDecorator({
        userData: {
            login: 'QbicR',
            searchValue: 'QbicR',
            avatar_url: avatar,
        },
        reposData: {
            repositories: [],
        },
    }),
]

export const Loading = Template.bind({})
Loading.decorators = [
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

export const Error = Template.bind({})
Error.decorators = [
    StoreDecorator({
        userData: {
            login: 'QbicR',
            searchValue: 'QbicR',
            avatar_url: avatar,
            error: 'Пользователь не найден. Проверьте правильность введенных данных.',
        },
    }),
]

export const WithEmptyLoginAndSearchValues = Template.bind({})
WithEmptyLoginAndSearchValues.decorators = [
    StoreDecorator({
        userData: {
            login: '',
            searchValue: '',
        },
    }),
]
