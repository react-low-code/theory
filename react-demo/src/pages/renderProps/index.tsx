import React from 'react'

interface PrintLogOnMountProps {
    render: () => React.ReactNode;
    loading?: boolean
}

class PrintLogOnMount extends React.Component<PrintLogOnMountProps, never> {
    componentDidMount() {
        console.log('我被装载了')
    }

    render(): React.ReactNode {
        return ( this.props.loading ? <div>loading...</div>:this.props.render())
    }
}

interface SubmitLogFromRenderProps {
    render: (submitLog: (data: string) => void) => React.ReactNode;
}

class SubmitLogFromRender extends React.Component<SubmitLogFromRenderProps, never> {
    submitLog = (data: string): void => { /**todo*/ }
    render(): React.ReactNode {
        return this.props.render(this.submitLog)
    }
}

export { PrintLogOnMount, SubmitLogFromRender } 