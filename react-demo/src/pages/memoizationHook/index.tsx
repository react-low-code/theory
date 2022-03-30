import React, { useCallback, useEffect, useMemo, useState } from 'react'

interface TodoItem {
    text: string
    id: number
}

export function TodoListWithoutMemo() {
    const [list, setList] = useState<TodoItem[]>(() => {
        const caches = localStorage.getItem('todo') || '[]'
        try {
            return JSON.parse(caches)
        } catch (error) {
            return []
        }
    })
    const [searchKey, setSearchKey] = useState<string>('')
    const [inputText, setInputText] = useState<string>('')
    // const filteredItems = list.filter(item => item.text.toLocaleUpperCase().includes(searchKey.toLocaleUpperCase()))
    const filteredItems = useMemo(() => {
        return list.filter(item => item.text.toLocaleUpperCase().includes(searchKey.toLocaleUpperCase()))
    }, [searchKey, list])

    const onSearch = () => {
        setSearchKey(inputText)
    }

    const onChangeInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }

    const onAdd = () => {
        setList((prevList) => prevList.concat({text: inputText, id: Math.random()}))
        setInputText('')
    }

    // const onRemove = (id: number) => {
    //     setList((prevList) => prevList.filter(item => item.id !== id))
    // }

    const onRemove = useCallback((id: number) => {
        setList((list) => list.filter(item => item.id !== id))
    }, [])

    useEffect(() => {
        localStorage.setItem('todo',JSON.stringify(list))
    }, [list])


    return (
        <div>
            <input type="text" value={inputText} onChange={onChangeInputText} />
            <button type="button" onClick={onSearch}>
                搜索
            </button>
            <button type='button' onClick={onAdd}>添加</button>

            <TodoList list={filteredItems} onRemove={onRemove}/>
        </div>
    )
}

const TodoItem = React.memo((props: {item: TodoItem, onRemove: (id: number) => void}) => {
    console.log('dd')
    return (
        <div>{props.item.text} <button onClick={() => props.onRemove(props.item.id)}>删除</button></div>
    )
})

// function TodoItem(props: {item: TodoItem, onRemove: (id: number) => void}) {
//     return (
//         <div>{props.item.text} <button onClick={() => props.onRemove(props.item.id)}>删除</button></div>
//     )
// }

const TodoList = React.memo((props: {list: TodoItem[], onRemove: (id: number) => void}) => {
    console.log('TodoList')
    return (
        <div>
            {props.list.map(item => <TodoItem key={item.id} item={item} onRemove={props.onRemove}/>)}
        </div>
    )
})

// function TodoList(props: {list: TodoItem[], onRemove: (id: number) => void}) {
//     console.log('TodoList')
//     return (
//         <div>
//             {props.list.map(item => <TodoItem key={item.id} item={item} onRemove={props.onRemove}/>)}
//         </div>
//     )
// }