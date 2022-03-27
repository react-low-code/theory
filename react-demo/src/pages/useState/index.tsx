import React, { useState } from 'react'

export function UseStateBaseDemo() {
    const [name, setName] = useState<string>('何遇')
    const [age, setAge] = useState<number>()
    const [count, setCount] = useState<number>(() => {
        return Number(localStorage.getItem('count')) || 0
    })

    function onChange() {
        setName(Math.random() + '')
        setAge(Math.random())
        setCount((prevCount) => {
            localStorage.setItem('count', prevCount + 1 + '')
            return prevCount + 1
        })
        
    }

    return (
        <>
        <div>姓名: {name}</div>
        <div>年龄: {age === undefined ? '未知' : age}</div>
        <div>count: {count}</div>
        <button onClick={onChange}>click</button>
        </>
    )
}

export function UseStateAdvanceDemo() {
    // count 的初始值为 0
    const [count, setCount] = useState<number>(0)

    const onClick = () => {
        setCount((prevCount) => prevCount + 1) // 将count在原来的基础上加1
        setTimeout(() => {
            console.log(count) // 分析浏览器打印的结果
        }, 1000)
    }

    return <button onClick={onClick}>打开开发者工具再点击</button>
}