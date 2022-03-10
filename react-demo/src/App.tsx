import React from 'react';
import './App.scss'

// import ProfilerTab from './pages/profilerTab'
// import JSXSyntax from './pages/JSXSyntax';
// import Immutable from './pages/immutable';
import ClassComponent from './pages/component';

function App() {
  return (
    <div styleName='app'>
        {/* <ProfilerTab/> */}
        {/* <JSXSyntax/> */}
        {/* <Immutable/> */}
        <ClassComponent 
          title="我是标题"
          // title={<div>我是标题</div>}
          // title={null}
          children={<div>我是 children</div>}
        />
    </div>
  );
}

export default App;
