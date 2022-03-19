import React from 'react'

export interface InjectedProps {
    submitLog: (data: string) => void
}

export function WithSubmitLog<P extends InjectedProps>(InnerComponent: React.ComponentType<P>) {
    return class extends React.Component<Omit<P, keyof InjectedProps>, never> {
        submitLog = (data: string) => { /**todo*/ }
        render() {
            const props = ({
                ...this.props,
                submitLog: this.submitLog
            }) as P
            return <InnerComponent {...props}/>
        }
    }
}