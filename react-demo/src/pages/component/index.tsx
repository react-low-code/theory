import React from 'react'

interface Props {
    title: React.ReactNode
}

interface State {
    name: string;
    age: number
}

export default class ClassComponent extends React.Component<Props, State> {
    state: State = {
        name: 'Bella',
        age: 12
    }

    constructor(props: Props) {
        super(props)
        this.changeAge = this.changeAge.bind(this)
    }

    shouldComponentUpdate() {
        return false
    }

    changeName = () => {
        this.setState({
            name: Math.random() + ''
        })
    }

    changeAge() {
        // todo
    }
    
    render() {
        return (
        <div>
            {this.props.children}  
            <div>name: {this.state.name}</div>
            <button onClick={this.changeName}>changeName</button>
        </div>
        )
    }
}