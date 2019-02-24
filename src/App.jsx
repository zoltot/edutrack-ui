import React from 'react';
import logo from './logo.svg';
import {LoginModal} from "./components/loginmodal";
import './App.css';
import './assets/scss/main.css'

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        <code>src/App.js</code>
        and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>

    <LoginModal show={true}/>
  </div>
);
export default App;