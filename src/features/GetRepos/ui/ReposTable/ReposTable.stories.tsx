import { StoryFn, Meta } from '@storybook/react'

import { ReposTable } from './ReposTable'
import { RepositoryType } from '../../model/types/repositoryType'
import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'features/ReposTable',
    component: ReposTable,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as Meta<typeof ReposTable>

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

const Template: StoryFn<typeof ReposTable> = (args) => <ReposTable {...args} />

export const WithValues = Template.bind({})
WithValues.args = {
    login: 'QbicR',
    repositories: repositories,
}
WithValues.decorators = [StoreDecorator({ commitesData: { commites: [] } })]

export const WithEmpryValues = Template.bind({})
WithEmpryValues.args = {
    login: 'QbicR',
    repositories: [],
}
WithEmpryValues.decorators = [StoreDecorator({ commitesData: { commites: [] } })]
