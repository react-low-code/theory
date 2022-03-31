import React, { useLayoutEffect, useRef, useState } from 'react'
import './index.css'

export default function UseLayoutEffectDemo() {
    const divRef = useRef<HTMLDivElement>(null)
    const [count, setCount] = useState<number>(0)
    
    useLayoutEffect(() => {
        if (divRef.current) {
            if (count % 2) {
                divRef.current.classList.add('big')
            } else {
                divRef.current.classList.remove('big')
            }
        }
    })

    return <>
        <div ref={divRef}>应该使用 useLayoutEffect</div>
        <button onClick={() => setCount(count + 1)}>click</button>
    </>
}