import type { Preview } from '@storybook/react'

import '../src/app/styles/index.css'
import { RouterDecorator } from './../src/shared/config/storybook/RouteDecorator/RouteDecorator'

export const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [RouterDecorator],
}
