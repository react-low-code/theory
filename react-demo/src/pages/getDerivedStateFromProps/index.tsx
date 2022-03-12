import React from 'react'
import memoize from 'memoize-one'

interface State {
    id: string;
    list: {id: string, name: string}[]
}

 export default class Lifecycle extends React.Component<{},State> {
    constructor(props: {}) {
        super(props);
        const list: State['list'] = []
        for (let index = 0; index < 100; index++) {
            list.push({
                id: index + '',
                name: 'name-' + index
            })
            
        }

        this.state = {
            id: '1',
            list
        }
    }

    render() {
        return (
            <div>
                <div>
                    <MyChildrenMis 
                        list={this.state.list}
                        id={this.state.id}
                    />
                    <MyChildrenFine 
                        list={this.state.list}
                        id={this.state.id}
                    />
                </div>
            </div>
        )
    }

    
}

interface MyChildrenProps {
    id: string
    list: State['list']
}

interface MyChildrenState {
    prevId?: string;
    displayList: MyChildrenProps['list'];
    name: string
}

// 这是不推荐的写法
class MyChildrenMis extends React.Component<MyChildrenProps, MyChildrenState>{

    state: MyChildrenState = {
        displayList: [],
        name: ''
    }

    static getDerivedStateFromProps(props: MyChildrenProps, state: MyChildrenState) {
        // 将之前的 id 保存在 state 中，以便当 props 的 id 发生时对比
        if (props.id !== state.prevId) {
            return {
                prevId: props.id,
                // 只在 id 发生变化时候重新计算 displayList
                displayList: props.list.filter(item => item.id === props.id)
            }
        } else {
            // 无需更新 state
            return null
        }
    }

    render() {
        return (
            <div>
                <div>name:{this.state.name}</div>
                <button onClick={this.changeName}>change name</button>
                {this.state.displayList.map(item => <p key={item.id}>{item.name}</p>)}
            </div>
        )
    }

    changeName = () => {
        this.setState({
            name: Math.random() + ''
        })
    }
}

// 这是推荐的写法
class MyChildrenFine extends React.Component<MyChildrenProps, {name: string}>{
    state: {name: string} = {
        name: ''
    }
    // 当 list 和 id 发生变化时候，才会重新计算
    getDisplayList = memoize((list: MyChildrenProps['list'], id: string) => list.filter(item => item.id === id))

    render() {
        const displayList = this.getDisplayList(this.props.list, this.props.id)
        return (
            <div>
                <div>name:{this.state.name}</div>
                <button onClick={this.changeName}>change name</button>
                {displayList.map(item => <p key={item.id}>{item.name}</p>)}
            </div>
        )
    }

    changeName = () => {
        this.setState({
            name: Math.random() + ''
        })
    }
}

class FetchRemoteData extends React.Component<{id: string},{prevId?: string, data?: string[]}> {

    static getDerivedStateFromProps(props: {id: string}, state: {prevId?: string, data?: string[]}) {
        if (props.id !== state.prevId) {
            return {
                prevId: props.id,
                data: undefined
            }
        } else {
            return null
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    componentDidUpdate() {
        if (!this.state.data) {
            this.fetchData()
        }
    }

    render() {
        if (!this.state.data) {
            return <div>loading...</div>
        } else {
            return (
                <div>
                    {this.state.data.map(item => <span>{item}</span>)}
                </div>
            )
        }
    }

    fetchData = () => {
        // todo
    }
}