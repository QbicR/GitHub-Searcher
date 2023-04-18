import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { DeepPartial } from '@reduxjs/toolkit'

import { StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'

interface Props {
    initialState?: DeepPartial<StateSchema>
    children?: ReactNode
}

export const StoreProvider: React.FC<Props> = (props) => {
    const { initialState, children } = props

    const store = createReduxStore(initialState as StateSchema)

    return <Provider store={store}>{children}</Provider>
}
