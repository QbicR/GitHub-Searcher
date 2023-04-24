import { StoryFn, Meta } from '@storybook/react'

import { CommitsWidget } from './CommitsWidget'
import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { commites } from 'shared/const/mockDataForTests'

export default {
    title: 'widgets/CommitsWidget',
    component: CommitsWidget,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as Meta<typeof CommitsWidget>

const Template: StoryFn<typeof CommitsWidget> = () => <CommitsWidget />

export const Normal = Template.bind({})
Normal.decorators = [
    StoreDecorator({
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
        commitesData: {
            error: 'Коммиты не найдены. Репозиторий пуст.',
        },
        reposData: {
            reposName: 'Reposity №1',
        },
    }),
]
