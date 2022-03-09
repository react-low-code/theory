import React from 'react';
import './App.scss'

// import ProfilerTab from './pages/profilerTab'
// import JSXSyntax from './pages/JSXSyntax';
import Immutable from './pages/immutable';

function App() {
  return (
    <div styleName='app'>
        {/* <ProfilerTab/> */}
        {/* <JSXSyntax/> */}
        <Immutable/>
    </div>
  );
}

export default App;
