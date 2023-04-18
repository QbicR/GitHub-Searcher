import { StoryFn, Meta } from '@storybook/react'

import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'
import { CommitsTable } from './CommitsTable'
import { CommitType } from 'features/GetCommits/model/types/commitType'

export default {
    title: 'features/CommitsTable',
    component: CommitsTable,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as Meta<typeof CommitsTable>

const commites: CommitType[] = [
    { sha: '1234', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '12345', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '123456', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '1234567', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '12345678', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
    { sha: '123456789', commit: { author: { name: 'Qbic', date: '2023-04-18' } } },
]

const Template: StoryFn<typeof CommitsTable> = (args) => <CommitsTable {...args} />

export const WithValues = Template.bind({})
WithValues.args = {
    commites: commites,
}

export const WithEmpryValues = Template.bind({})
WithEmpryValues.args = {
    commites: [],
}
