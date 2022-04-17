import React from 'react'
import { ToDoList } from '../../mobx/todo'

export default React.createContext<ToDoList>({
    list: [],
    searchStatus: undefined,
    get displayList() {
        return []
    },
    changeStatus: () => {},
    addItem: () => {},
    fetchInitData: () => Promise.resolve<void>(undefined),
})