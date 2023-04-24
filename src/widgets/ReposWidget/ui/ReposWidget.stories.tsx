import { StoryFn, Meta } from '@storybook/react'

import { ReposWidget } from './ReposWidget'
import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import avatar from 'shared/assets/tests/storybook/avatar.jpg'
import { repositories } from 'shared/const/mockDataForTests'

export default {
    title: 'widgets/ReposWidget',
    component: ReposWidget,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as Meta<typeof ReposWidget>

const Template: StoryFn<typeof ReposWidget> = () => <ReposWidget />

export const Normal = Template.bind({})
Normal.decorators = [
    StoreDecorator({
        reposData: {
            repositories: repositories,
        },
        userData: {
            login: 'QbicR',
            avatar_url: avatar,
        },
    }),
]

export const Loading = Template.bind({})
Loading.decorators = [
    StoreDecorator({
        reposData: {
            loading: true,
        },
    }),
]

export const Error = Template.bind({})
Error.decorators = [
    StoreDecorator({
        reposData: {},
        userData: {
            login: 'QbicR',
            avatar_url: avatar,
            error: 'Пользователь не найден. Проверьте правильность введенных данных.',
        },
    }),
]
