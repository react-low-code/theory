import React, { useEffect } from 'react'
import { autorun, reaction, when, runInAction } from 'mobx'
import toDoList, { Status, waitTime } from '../../mobx/todo'


export default function MobxStart() {
    
    useEffect(() => {
        autorun(async () => {
            // 会跟踪 toDoList.list.length 的变化
            console.log(toDoList.list.length, 'todo')

            await waitTime()
            // 不会跟踪 toDoList.searchStatus 的变化
            console.log(toDoList.searchStatus, 'searchStatus async')
        })
        autorun(() => {
            runInAction(() => {
                // toDoList.searchStatus在action中被读取，它不会被跟踪。
                console.log(toDoList.searchStatus)
            })
            console.log(toDoList.displayList, 'displayList')
        })
        autorun(() => {
            console.log(toDoList.searchStatus, 'searchStatus')
        })
        autorun(() => {
            if (toDoList.list.length) {
                console.log(toDoList.list[0]?.status,'status')
            }
        })
        reaction(() => {
            const j = toDoList.searchStatus
            return toDoList.list.length
        }, () => {
            toDoList.list[0].changeStatus(Status.finished)
        })
        when(() => {
            const j = toDoList.searchStatus
            return toDoList.list.length > 2
        }, () => {
            console.log('disposer when')
        })

        async function waitTrue(){
            await when(() => toDoList.list.length > 2)
            // 知道 toDoList.list.length > 2 为true，才会运行到这里
        }
    }, [])

    const onClickSearchKey = () => {
        toDoList.changeStatus(Status.default)
    }

    const onClickAdd = () => {
        toDoList.addItem(Math.random() + '')
    }

    const onfetch = () => {
        toDoList.fetchInitData()
    }

    return (
        <div>
            <button onClick={onfetch}>fetch</button>
            <button onClick={onClickSearchKey}>searchKey </button>
            <button onClick={onClickAdd}>todo </button>
        </div>
    )
}