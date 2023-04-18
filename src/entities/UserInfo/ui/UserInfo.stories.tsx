import { StoryFn, Meta } from '@storybook/react'

import { UserInfo } from './UserInfo'
import avatar from 'shared/assets/tests/storybook/avatar.jpg'

export default {
    title: 'entities/UserInfo',
    component: UserInfo,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof UserInfo>

const Template: StoryFn<typeof UserInfo> = (args) => <UserInfo {...args} />

export const Normal = Template.bind({})
Normal.args = {
    login: 'QbicR',
    avatar: avatar,
}
