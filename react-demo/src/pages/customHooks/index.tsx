import React, { useState } from 'react'
import usePrevVal from './usePrevVal'
import useForceUpdate from './useForceUpdate'

export default function CustomHooksDemo() {
    const [count, setCount] = useState<number>(0)
    const [obj, setObj] = useState<{count: number}>({count: 1})
    const prevCount = usePrevVal(count)
    const prevObj = usePrevVal(obj)
    const forceUpdate = useForceUpdate()

    return (
        <div>
            <p>count: {count}; prev count:{prevCount}</p>
            <button onClick={() => setCount(count + 1)}>change count</button>
            <p>obj: {JSON.stringify(obj)}; prev obj: {JSON.stringify(prevObj)}</p>
            <button onClick={() => setObj({count : obj.count + 1})}>change obj</button>
            {new Date().getTime()}
            <button onClick={() => forceUpdate()}>强制更新</button>
        </div>
    )
}