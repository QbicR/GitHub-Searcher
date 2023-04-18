import { StoryFn } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoreComtonent: StoryFn) =>
    (
        <StoreProvider initialState={state}>
            <StoreComtonent />
        </StoreProvider>
    )
