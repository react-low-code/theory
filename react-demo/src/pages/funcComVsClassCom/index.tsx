import React from 'react'


function getName(params: {name: string}) {
    const count = 0
    return params.name + '-' + count
}

getName({name: '何遇'})
getName({name: 'Bella'})

interface State {
    count: number
}

export default class FuncComVsClassCom extends React.Component<{},State> {
    state: State = {count: 0}
    render(): React.ReactNode {
        return (
            <>
                <FuncCom 
                    count={this.state.count}
                    updateCount={this.updateCount}
                />
                <ClassCom
                    count={this.state.count}
                    updateCount={this.updateCount}
                />
            </>
        )
    }
    updateCount = () => {
        this.setState((prevSate: State) => {
            return {count: prevSate.count + 1}
        })
    }
}

interface Props {
    count: number;
    updateCount: () => void
}

function FuncCom(props: Props) {
    const onClick = () => {
        props.updateCount()
        setTimeout(() => {
            console.log(props.count)
        }, 1000);
    }
    return (
        <button onClick={onClick}>这是函数组件：刷新浏览器打开开发者工具再点击</button>
    )
}

class ClassCom extends React.Component<Props, never> {
    render(): React.ReactNode {
        return (
            <button onClick={this.onClick}>这是类组件：刷新浏览器打开开发者工具再点击</button>
        )
    }

    onClick = () => {
        this.props.updateCount()
        setTimeout(() => {
            console.log(this.props.count)
        }, 1000);
    }
}
