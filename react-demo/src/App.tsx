import React from 'react';
import './App.scss'

// import ProfilerTab from './pages/profilerTab'
// import JSXSyntax from './pages/JSXSyntax';
// import Immutable from './pages/immutable';
// import ClassComponent from './pages/component';
// import GetDerivedStateFromProps from './pages/getDerivedStateFromProps';
// import RefUse from './pages/ref'
// import UserDetail from './pages/HOC'
// import { PrintLogOnMount, SubmitLogFromRender } from './pages/renderProps'
// import { UseStateBaseDemo, UseStateAdvanceDemo } from './pages/useState'
// import FuncComVsClassCom from './pages/funcComVsClassCom'
// import UseRefDemo from './pages/useRef'
// import { EffectWithoutCleanUp, EffectWithCleanUp } from './pages/useEffect'
// import CounterDemo from './pages/useReducer'
// import { TodoListWithoutMemo } from './pages/memoizationHook'
// import UseImperativeHandleDemo from './pages/useImperativeHandle'
import UseLayoutEffectDemo from './pages/useLayoutEffect'
// import UseDebugValueDemo from './pages/useDebugValue'
// import CustomHooksDemo from './pages/customHooks'
// import ContextDemo from './pages/context'
// import { LiftChildren, MemoChildrenDemo } from './pages/reRender'

function App() {
  return (
    <div styleName='app'>
        {/* <ProfilerTab/> */}
        {/* <JSXSyntax/> */}
        {/* <Immutable/> */}
        {/* <ClassComponent
          title='title'
        /> */}
        {/* <GetDerivedStateFromProps /> */}
        {/* <RefUse/> */}
        {/* <UserDetail 
          name='何遇'
        /> */}
        {/* <PrintLogOnMount
          render={() => <div>姓名: 何遇</div>}
        /> */}

        {/* <SubmitLogFromRender
          render={(submitLog: (data: string) => void) => (
            <div>
              姓名: 何遇
              <button onClick={() => submitLog('click')}> click </button>
          </div>
          )}
        /> */}
        {/* <UseStateBaseDemo/> */}
        {/* <UseStateAdvanceDemo/> */}
        {/* <FuncComVsClassCom/> */}
        {/* <UseRefDemo/> */}
        {/* <EffectWithoutCleanUp/> */}
        {/* <EffectWithCleanUp/> */}
        {/* <CounterDemo/> */}
        {/* <TodoListWithoutMemo/> */}
        {/* <UseImperativeHandleDemo/> */}
        <UseLayoutEffectDemo/>
        {/* <UseDebugValueDemo/> */}
        {/* <CustomHooksDemo/> */}
        {/* <ContextDemo/> */}
        {/* <LiftChildren/> */}
    </div>
  );
}

export default App;
