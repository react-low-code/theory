import React, { useState } from 'react'

export function UseStateWithoutFunc() {
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