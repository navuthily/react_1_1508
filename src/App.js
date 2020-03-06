import React from 'react';
import './App.css';
import DemoStateful from './components/demo.stateful';
import DemoStateless from './components/demo.stateless';
import Products from './components/Products';
import Tick from './components/Tick';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    <DemoStateless username={'nana kute'} email={'vuthilyna304@gmail.com'} />
        <DemoStateful username={'nana kute'} email={'vuthilyna21@gmail.com'}/>
        <Products/>
        <Tick/>
        <a
          className="App-link"
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
