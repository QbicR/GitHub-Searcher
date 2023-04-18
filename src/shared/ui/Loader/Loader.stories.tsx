import { StoryFn, Meta } from '@storybook/react'

import { Loader } from './Loader'

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Loader>

const Template: StoryFn<typeof Loader> = () => <Loader />

export const Normal = Template.bind({})
