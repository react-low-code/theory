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
// import { UseStateWithoutFunc } from './pages/useState'
import FuncComVsClassCom from './pages/funcComVsClassCom'

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
        {/* <UseStateWithoutFunc/> */}
        <FuncComVsClassCom/>
    </div>
  );
}

export default App;
