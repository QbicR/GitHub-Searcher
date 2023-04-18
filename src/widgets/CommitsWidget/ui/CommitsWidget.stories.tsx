import { StoryFn, Meta } from '@storybook/react'

import { CommitsWidget } from './CommitsWidget'
import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { CommitType } from 'features/GetCommits/model/types/commitType'

export default {
    title: 'widgets/CommitsWidget',
    component: CommitsWidget,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as Meta<typeof CommitsWidget>

const Template: StoryFn<typeof CommitsWidget> = () => <CommitsWidget />

const commites: CommitType[] = [
    { sha: '1234', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '12345', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '123456', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '1234567', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '12345678', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '123456789', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
]

export const Normal = Template.bind({})
Normal.decorators = [
    StoreDecorator({
        commitesData: {
            commites: commites,
        },
    }),
]

export const Loading = Template.bind({})
Loading.decorators = [
    StoreDecorator({
        commitesData: {
            loading: true,
        },
    }),
]

export const Error = Template.bind({})
Error.decorators = [
    StoreDecorator({
        commitesData: {
            error: 'Коммиты не найдены. Репозиторий пуст.',
        },
    }),
]
