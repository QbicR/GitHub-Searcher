import { StoryFn, Meta } from '@storybook/react'

import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'
import { TableHeader } from './TableHeader'
import { commitesTableHeader, reposTableHeader } from 'shared/const/mockDataForTests'

export default {
    title: 'entities/table/TableHeader',
    component: TableHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as Meta<typeof TableHeader>

const Template: StoryFn<typeof TableHeader> = (args) => <TableHeader {...args} />

export const CommitesTableHeader = Template.bind({})
CommitesTableHeader.args = { tableHeader: commitesTableHeader }

export const ReposTableHeader = Template.bind({})
ReposTableHeader.args = { tableHeader: reposTableHeader }
