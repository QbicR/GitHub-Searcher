import { StoryFn, Meta } from '@storybook/react'
import { Search } from './Search'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'

export default {
    title: 'entities/Search',
    component: Search,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as Meta<typeof Search>

const Template: StoryFn<typeof Search> = () => <Search />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [
    StoreDecorator({
        userData: {
            searchValue: '',
        },
    }),
]

export const WithSearchValue = Template.bind({})
WithSearchValue.args = {}
WithSearchValue.decorators = [
    StoreDecorator({
        userData: {
            searchValue: 'QbicR',
        },
    }),
]
