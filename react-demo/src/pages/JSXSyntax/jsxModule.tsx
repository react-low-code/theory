import React from 'react'
// 在

const name = 'bella';
export const jsx =  (
    <div>
        <div>这是JSX语法</div>
        {undefined}
        <div>如果要访问变量，那么要将变量名用花括号括起来, {name}</div>
    </div>    
)

const HelloJSX1 = <div>hello jsx</div>

// HelloJSX1 的写法被转成 HelloJSX2的形式
const HelloJSX2 = React.createElement('div', null, 'hello jsx')

const MyObj = {
    name: () => <div>bella</div>
}

 const nameDiv = <MyObj.name/>
