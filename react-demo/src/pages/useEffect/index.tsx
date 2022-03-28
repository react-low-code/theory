import React, { useEffect, useState } from 'react'

export function EffectWithoutCleanUp() {
    const [name, setTitle] = useState<string>('何遇')
    // dom 被绘制到界面上之后将 document.title 设置成本次渲染时 name 的值
    useEffect(() => {
        document.title = name
        console.log('ddd')
    })
    const onClick = () => {
        setTitle(Math.random() + '')
    }

    return (
        <div>
            <div>name: {name}</div>
            <button onClick={onClick}>修改name</button>
        </div>
    )
}


export function EffectWithCleanUp() {
    const [name, setTitle] = useState<string>('何遇')
    useEffect(() => {
        const onBody = () => {/** todo */}
        document.body.addEventListener('click', onBody)
        return () => {
            // 在组件被销毁之前将事件解绑
            document.body.removeEventListener('click', onBody)
        }
    })
    const onClick = () => {
        setTitle(Math.random() + '')
    }

    return (
        <div>
            <div>name: {name}</div>
            <button onClick={onClick}>修改name</button>
        </div>
    )
}

export function EffectWithCleanUpNoDeps() {
    const [name, setTitle] = useState<string>('何遇')
    useEffect(() => {
        const onBody = () => {/** todo */}
        document.body.addEventListener('click', onBody)
        return () => {
            // 在组件被移除组件树之前将事件解绑
            document.body.removeEventListener('click', onBody)
        }
    }, [])
    const onClick = () => {
        setTitle(Math.random() + '')
    }

    return (
        <div>
            <div>name: {name}</div>
            <button onClick={onClick}>修改name</button>
        </div>
    )
}



