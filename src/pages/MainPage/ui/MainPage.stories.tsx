import { StoryFn, Meta } from '@storybook/react'

import MainPage from './MainPage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as Meta<typeof MainPage>

const Template: StoryFn<typeof MainPage> = () => <MainPage />

export const Normal = Template.bind({})
Normal.decorators = [
    StoreDecorator({
        userData: {
            searchValue: '',
        },
    }),
]

export const WithSearchValue = Template.bind({})
WithSearchValue.decorators = [
    StoreDecorator({
        userData: {
            searchValue: 'QbicR',
        },
    }),
]
