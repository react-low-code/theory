import React, { useReducer, useState, useEffect } from 'react'

interface Counter {
    value: number
    step: number
}
interface Action {
    type: 'increment' | 'decrement' | 'reset'|'changeStep',
    value?: number
}
const initArg: Counter = {value: 0, step: 1}

// 它用于更新state
function reducer(prevState: Counter, action: Action): Counter  {
    switch (action.type) {
        case 'increment':
            return {
                ...prevState,
                value: prevState.value + prevState.step
            }
        case 'decrement':
            return {
                ...prevState,
                value: prevState.value - prevState.step
            }
        case 'reset':
            return initArg
        case 'changeStep':
            return {
                ...prevState,
                step: action.value || initArg.value
            }
        default:
            throw new Error();
    }
}

function UseReducerCounterDemo() {
    const [counter, dispatch] = useReducer(reducer, initArg)

    const onChangeStep = (ev: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: 'changeStep',value: Number(ev.target.value)})
    }

    return (
        <div>
            <h2>用useReducer实现计数器</h2>
            count: {counter.value}; 
            step: <input type='number' value={counter.step} onChange={onChangeStep}/>
            <button onClick={() => dispatch({type: 'increment'})}>加</button>
            <button onClick={() => dispatch({type: 'decrement'})}>减</button>
            <button onClick={() => dispatch({type: 'reset'})}>重置</button>
        </div>
    )
}

function UseStateCounterDemo() {
    const [value, setValue] = useState<number>(0)
    const [step, setStep] = useState<number>(1)

    const onChangeStep = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setStep( Number(ev.target.value))
    }

    return (
        <div>
            <h2>用useState实现计数器</h2>
            count: {value}; 
            step: <input type='number' value={step} onChange={onChangeStep}/>
            <button onClick={() => setValue(value + step)}>加</button>
            <button onClick={() => setValue(value - step)}>减</button>
            <button onClick={() => {setValue(0); setStep(1)}}>重置</button>
        </div>
    )
}

function DispatchDemo(props: {step: number}) {
    function reducer(prevState: number) {
        return props.step + prevState
    }
    const [value, dispatch] = useReducer(reducer, 0)

    useEffect(() => {
        document.body.addEventListener('click', dispatch)
        return () => {
            document.body.removeEventListener('click', dispatch)
        }
    }, [dispatch])

    return (
        <div>
            <p>点这儿</p>
            value: {value}
        </div>
    )
}

export default function CounterDemo() {
    const [step, setStep] = useState<number>(1)
    useEffect(() => {
        const id = setInterval(() => {
            setStep(prevStep => ++prevStep)
        }, 1000)

        return () => {
            clearInterval(id)
        }
    }, [])
    return (
        <>
            <UseStateCounterDemo/>
            <UseReducerCounterDemo/>
            <DispatchDemo step={step}/>
        </>
    )
}

