import React from 'react';
import logo from './logo.svg';
import './App.scss'

function App() {
  return (
    <div styleName="App">
      <header styleName='App-header'>
        <img src={logo} styleName='App-logo' alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          styleName='App-link'
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
