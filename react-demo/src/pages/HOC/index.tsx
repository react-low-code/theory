import React from 'react'
// import WithPrintLog from './PrintLog'
import {WithSubmitLog, InjectedProps} from './SubmitLog';


// interface Props {
//     name: string
// }

// function UserDetail(props: Props) {
//     return (
//         <div>姓名: {props.name}</div>
//     )
// }

interface Props extends InjectedProps {
    name: string
}

function UserDetail(props: Props) {
    const onClick = () => {
        props.submitLog('click')
    }
    return (
        <div>
            姓名: {props.name}
            <button onClick={onClick}> click </button>
        </div>
    )
}

export default WithSubmitLog<Props>(UserDetail)