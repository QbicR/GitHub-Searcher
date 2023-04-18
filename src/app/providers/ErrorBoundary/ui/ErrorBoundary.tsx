import React, { ErrorInfo, ReactNode, Suspense } from 'react'

import { ErrorWidget } from 'widgets/ErrorWidget'
import { FallbackWidget } from 'widgets/FallbackWidget'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo)
    }

    render() {
        const { hasError } = this.state
        const { children } = this.props

        if (hasError) {
            return (
                <h1>
                    <Suspense fallback={<FallbackWidget />}>
                        <ErrorWidget />
                    </Suspense>
                </h1>
            )
        }

        return children
    }
}
