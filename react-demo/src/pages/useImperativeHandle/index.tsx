import React, { useImperativeHandle, useState, useRef } from 'react'

interface ChildInstance {
    getCount: () => number
}

export default function UseImperativeHandleDemo() {
    const childRef = useRef<ChildInstance>(null)
    const [childCount, setChildCount] = useState<number>()
    const onGetCount = () => {
        if (childRef.current) {
            setChildCount(childRef.current.getCount())
        }

    }
    return (

        <div>
            <div>
                子组件的 count: {childCount??'未知'}
                <button onClick={onGetCount}>获取子组件的 count</button>
            </div>
            <FuncChild ref={childRef}/>
        </div>
    )
}

const FuncChild = React.forwardRef<ChildInstance,{}>((props, ref) => {
    const [count, setCount] = useState<number>(0)
    useImperativeHandle(ref, () => {
        // 在这里必须返回 ChildInstance 接口中包含的字段
        return {
            getCount: () => count
        }
    }, [count])

    return (
        <div>
            这是我的count: {count}
            <button onClick={() => setCount(Math.random())}>change count</button>
        </div>
    )
})

