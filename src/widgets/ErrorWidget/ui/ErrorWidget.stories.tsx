import { StoryFn, Meta } from '@storybook/react'

import { ErrorWidget } from './ErrorWidget'
import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'

export default {
    title: 'widgets/ErrorWidget',
    component: ErrorWidget,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as Meta<typeof ErrorWidget>

const Template: StoryFn<typeof ErrorWidget> = () => <ErrorWidget />

export const Normal = Template.bind({})
