import React, { useState } from "react";

function Children(props: {onClick?: () => void}) {
    return <div>我来自 props.children </div>
}

const MemoizedChildren = React.memo(Children)

export function LiftChildren() {
    return <ShowChildren children={<Children/>}/>
}

function ShowChildren(props: {children: React.ReactNode}) {
    const [count, setCount] = useState<number>(0)

    return (
        <div>
            {count} <button onClick={() => setCount(c => c + 1)}>click</button>
            {/* 写法一 */}
            {props.children}
            {/* 写法二 */}
            {/* <Children/> */}
        </div>
    )
}

export function MemoChildrenDemo() {

    const onClick = () => { /** todo*/}

    return <MemoizedChildren onClick={onClick}/>
}