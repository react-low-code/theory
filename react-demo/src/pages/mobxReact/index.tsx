import React, { useContext, useEffect, useState } from 'react'
import { observer, useLocalObservable, Observer } from 'mobx-react'
import { observable } from 'mobx'
import toDoList, { Status, ToDoList } from '../../mobx/todo'
import todoContext from './todoContext'
(window as any).toDoList = toDoList
export default class MobXReact extends React.Component<{}, {}> {
  public render() {
    return (
      <>
         {/* <ToDoListDemoGlobalInstance/> */}
         {/* <ToDoListDemoByProps toDoList={toDoList}/> */}
         {/* <todoContext.Provider value={toDoList}>
          <ToDoListDemoByContext/>
         </todoContext.Provider> */}
         {/* <ToDoListFuncDemoLocalInstance/> */}
         {/* <ToDoListClassDemoLocalInstance/> */}
         {/* <LocalObservableDemo/> */}
         {/* <UseLocalObservableDemo/> */}
         {/* <ObservableDemo/> */}
         <RenderPropsMobx 
          render={
            () => <Observer>{() => <div>{toDoList.searchStatus}</div>}</Observer>
          }
        />
      </>
    );
  }
}

const ToDoListDemoGlobalInstance = observer(
  class extends React.Component<{}, {}> {
    componentDidMount() {
      setTimeout(() => {
        toDoList.changeStatus(Status.finished)
      }, 3000);
    }

    render() {
      return (
        <div>ToDoListDemoGlobalInstance - searchStatus: {toDoList.searchStatus}</div>
      )
    }
  }
)

@observer
class ToDoListDemoByProps extends React.Component<{toDoList: ToDoList}, {}> {
  componentDidMount() {
    setTimeout(() => {
      toDoList.changeStatus(Status.finished)
    }, 3000);
  }

  render() {
    return (
      <div>ToDoListDemoByProps - searchStatus: {this.props.toDoList.searchStatus}</div>
    )
  }
}

const ToDoListDemoByContext = observer(() => {
  const context = useContext(todoContext);
  useEffect(() => {
    setTimeout(() => {
      context.changeStatus(Status.finished)
    }, 3000);
  })
  return (
    <div>ToDoListDemoByContext - searchStatus: {context.searchStatus}</div>
  )
})

const ToDoListFuncDemoLocalInstance = observer(() => {
  // 不需要使用 setState 更新状态
  const [ todoList ] = useState(() => new ToDoList())
  useEffect(() => {
    setTimeout(() => {
      todoList.changeStatus(Status.finished)
    }, 3000);
  })
  return (
    <div>ToDoListDemoLocalInstance - searchStatus: {todoList.searchStatus}</div>
  )
})

@observer
class ToDoListClassDemoLocalInstance extends React.Component<{}, {}> {
  todoList = new ToDoList()
  componentDidMount() {
    setTimeout(() => {
      this.todoList.changeStatus(Status.finished)
    }, 3000);
  }
  render() {
    return <div>ToDoListDemoLocalInstance - searchStatus: {this.todoList.searchStatus}</div>
  }
}

const LocalObservableDemo = observer(() => {
  const [counter] = useState(() => observable({
    count: 0,
    addCount() {
      this.count ++
    }
  }))

  return <>
    <div>{counter.count}</div>
    <button onClick={() => counter.addCount()}>add</button>
  </>
})


const UseLocalObservableDemo = observer(() => {
  const counter = useLocalObservable(() => ({
    count: 0,
    addCount() {
      this.count ++
    }
  }))

  return <>
    <div>{counter.count}</div>
    <button onClick={() => counter.addCount()}>add</button>
  </>
})

class ObservableDemo extends React.Component<{},{}> {
  componentDidMount() {
    setTimeout(() => {
      toDoList.changeStatus(Status.finished)
    }, 3000);
  }
  render() {
    return (
    <>
      <div>{toDoList.searchStatus || '-'}</div> 
      <Observer render={() => <div>{toDoList.searchStatus || '-'}</div>}/>
    </>
    )
  }
}

const RenderPropsMobx = function RenderPropsMobx(props: {render: () => React.ReactNode}) {
  return (
    <div>
      render props API
      {props.render()}
    </div>
  )
}
