import React, { useLayoutEffect, useRef, useState } from 'react'
import './index.css'

export default function UseLayoutEffectDemo() {
    const divRef = useRef<HTMLDivElement>(null)
    const [fold, setFold] = useState<boolean>()
    
    useLayoutEffect(() => {
        if (divRef.current && fold === undefined) {
            setFold(divRef.current.clientHeight > 12)
        }
    }, [fold])

    return <>
        <div className={`${fold ? 'fold' : 'unfold'}`} ref={divRef}>应该使用 useLayoutEffect应该使用 useLayoutEffect应该使用 useLayoutEffect应该使用 useLayoutEffect应该使用 useLayoutEffect应该使用 useLayoutEffect应该使用 useLayoutEffect应该使用 useLayoutEffect应该使用 useLayoutEffect应该使用 useLayoutEffect应该使用 useLayoutEffect应该使用 useLayoutEffect应该使用 useLayoutEffect应该使用 useLayoutEffect应该使用 useLayoutEffect应该使用 useLayoutEffect应该使用 useLayoutEffect应该使用 useLayoutEffect应该使用 useLayoutEffect应该使用 useLayoutEffect应该使用 useLayoutEffect应该使用 useLayoutEffect</div>
    </>
}