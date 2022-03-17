import React, { useRef } from 'react'
import CustomInput from './CustomInput';

React.createRef<HTMLDivElement>()

interface cache {
    updateCount: number
}

export default function RefUse() {
    const inputRef = useRef<HTMLInputElement>(null)
    const childRef = useRef<ChildCom>(null)
    const mutableRef = useRef<cache>({updateCount: 0})
    const childInputRef = useRef<HTMLInputElement>(null)

    const onClickToFocus = () => {
        printCount()
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    const onClickToChangeState = () => {
        printCount()
        if (childRef.current) {
            childRef.current.changeCount()
        }
    }

    const printCount = () => {
        if (mutableRef.current.updateCount < 3) {
            mutableRef.current.updateCount ++
        } else {
            console.log('次数：'+mutableRef.current.updateCount)
        }
    }

    const alertInputValue = () => {
        if (childInputRef.current) {
            alert(childInputRef.current.value)
        }
    }

    return (
        <div>
            <h1>我是函数组件</h1>
            <input ref={inputRef}/>
            <button onClick={onClickToFocus}>点击按钮让input获取焦点</button>
            <div>
                <CustomInput 
                    ref={childInputRef}
                    title="我是自定义Input"
                />
                <button onClick={alertInputValue}>获取自定义input上的value</button>

                <ChildCom ref={childRef}/>
                <button onClick={onClickToChangeState}>在父组件中改变子组件的count</button>
            </div>
        </div>
    )
}

interface State {
    count: number
}

class ChildCom extends React.Component<{}, State> {
    ref = React.createRef<State>()
    state: State = {
        count: 0
    }
    changeCount = () => {
        this.setState({
            count: Math.random()
        })
    }

    render() {
        return (
            <div>count: {this.state.count}</div>
        )
    }
}

