import { StoryFn, Meta } from '@storybook/react'

import CommitsPage from './CommitsPage'
import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { commites } from 'shared/const/mockDataForTests'

export default {
    title: 'pages/CommitsPage',
    component: CommitsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as Meta<typeof CommitsPage>

const Template: StoryFn<typeof CommitsPage> = () => <CommitsPage />

export const Normal = Template.bind({})
Normal.decorators = [
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

export const Loading = Template.bind({})
Loading.decorators = [
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

export const Error = Template.bind({})
Error.decorators = [
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

export const WithEmpryLoginAndSearchValues = Template.bind({})
WithEmpryLoginAndSearchValues.decorators = [
    StoreDecorator({
        userData: {
            login: '',
            searchValue: '',
        },
    }),
]
