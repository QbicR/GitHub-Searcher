import { StoryFn, Meta } from '@storybook/react'

import { CommitsTable } from './CommitsTable'
import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'
import { commites } from 'shared/const/mockDataForTests'

export default {
    title: 'features/CommitsTable',
    component: CommitsTable,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as Meta<typeof CommitsTable>

const Template: StoryFn<typeof CommitsTable> = (args) => <CommitsTable {...args} />

export const Normal = Template.bind({})
Normal.args = {
    commites: commites,
}
