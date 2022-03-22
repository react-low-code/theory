import React from 'react'

interface Props {
    loading?: boolean
}

export default function WithPrintLog<P extends {}>(InnerComponent: React.ComponentType<P>) {
    return class extends React.Component<P & Props, never> {
        componentDidMount() {
            console.log('我被装载了')
        }

        render() {
            const {loading, ...props} = this.props
            return (loading ? <div>loading...</div> : <InnerComponent {...(props as P)}/>)
        }
    }
}