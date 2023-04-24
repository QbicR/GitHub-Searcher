import { StoryFn, Meta } from '@storybook/react'

import { ReposTable } from './ReposTable'
import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { repositories } from 'shared/const/mockDataForTests'

export default {
    title: 'features/ReposTable',
    component: ReposTable,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as Meta<typeof ReposTable>

const Template: StoryFn<typeof ReposTable> = (args) => <ReposTable {...args} />

export const Normal = Template.bind({})
Normal.args = {
    login: 'QbicR',
    repositories: repositories,
}
Normal.decorators = [StoreDecorator({ commitesData: { commites: [] } })]
