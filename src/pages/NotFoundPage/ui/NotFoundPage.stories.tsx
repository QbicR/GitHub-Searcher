import { StoryFn, Meta } from '@storybook/react'

import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'
import NotFoundPage from './NotFoundPage'

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as Meta<typeof NotFoundPage>

const Template: StoryFn<typeof NotFoundPage> = () => <NotFoundPage />

export const Normal = Template.bind({})
