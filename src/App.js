import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lelist from './lelist.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <center><Lelist /></center>
      </header>
    </div>
  );
}

export default App;
