import React, {useState, useRef} from 'react'

export default function UseRefDemo() {
    // count 的初始值为 0
    const [count, setCount] = useState<number>(0)
    // ref.current 属性的初始值为 0
    const ref = useRef<number>(0)

    const onClick = () => {
        setCount((prevCount) => prevCount + 1) // 将count在原来的基础上加1
        ref.current ++ // 将 ref.current 在原来的基础上几1
        setTimeout(() => {
            console.log(count) // 分析浏览器打印的结果
            console.log(ref.current) // 分析浏览器的打印结果
        }, 1000)
    }

    return <button onClick={onClick}>打开开发者工具再点击</button>
}