import { StoryFn, Meta } from '@storybook/react'

import { CommitInfo } from './CommitInfo'
import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'

export default {
    title: 'entities/CommitInfo',
    component: CommitInfo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as Meta<typeof CommitInfo>

const Template: StoryFn<typeof CommitInfo> = (args) => <CommitInfo {...args} />

export const Normal = Template.bind({})
Normal.args = {
    reposName: 'Repository №1',
}
