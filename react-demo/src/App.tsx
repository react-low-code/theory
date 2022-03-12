import React from 'react';
import './App.scss'

// import ProfilerTab from './pages/profilerTab'
// import JSXSyntax from './pages/JSXSyntax';
import Immutable from './pages/immutable';
// import ClassComponent from './pages/component';
// import GetDerivedStateFromProps from './pages/getDerivedStateFromProps';

function App() {
  return (
    <div styleName='app'>
        {/* <ProfilerTab/> */}
        {/* <JSXSyntax/> */}
        <Immutable/>
        {/* <ClassComponent
          title='title'
        /> */}
        {/* <GetDerivedStateFromProps /> */}
    </div>
  );
}

export default App;
