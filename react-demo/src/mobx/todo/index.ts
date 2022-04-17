import { makeObservable, observable, action, computed, runInAction, autorun } from 'mobx'

export function waitTime() {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

let Uid = 0
export enum Status {
    default,
    finished
}

export class ToDoItem {
    id: number
    name: string
    status: Status

    changeStatus(status: Status) {
        this.status = status
    }

    constructor(name: string) {
        this.id = Uid ++
        this.name = name
        this.status = Status.default
        makeObservable(this, {
            status: observable,
            changeStatus: action
        })
    }
}

export class ToDoList {
    searchStatus?: Status
    list: ToDoItem[] = []
    get displayList() {
        if (!this.searchStatus) {
            return this.list
        } else {
            return this.list.filter(item => item.status === this.searchStatus)
        }
        
    }

    changeStatus(searchStatus: Status | undefined) {
        this.searchStatus = searchStatus
    }

    addItem(name: string) {
        this.list.push(new ToDoItem(name))
    }

    async fetchInitData() {
        await waitTime()
        runInAction(() => {
            this.list = [new ToDoItem('one'), new ToDoItem('two')]
        })
    }

    constructor() {
        makeObservable(this, {
            searchStatus: observable,
            list: observable,
            displayList: computed,
            changeStatus: action,
            addItem: action
        })
    }
}


const users = observable([
    {name: 'Bella'},
    {name: '何遇'}
])

autorun(() => {
    console.log(users[0].name)
})
// autorun 函数将运行
users[0].name = 'Bella12'

export default new ToDoList()