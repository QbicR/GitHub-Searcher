import { StoryFn, Meta } from '@storybook/react'

import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'
import { FallbackWidget } from './FallbackWidget'

export default {
    title: 'widgets/FallbackWidget',
    component: FallbackWidget,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as Meta<typeof FallbackWidget>

const Template: StoryFn<typeof FallbackWidget> = () => <FallbackWidget />

export const Normal = Template.bind({})
