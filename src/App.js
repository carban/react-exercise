import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lelist from './lelist.js';
import Posts from "./posts";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Developed by Component
function DevelopedBy(){
  return <h2>Developed by Carban</h2>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <center>
          <Router>
            {/* Link dentro de Router */}
            <div className="navig">
              <Link to="/">ToDo</Link>
              <br></br>
              <Link to="/posts">Posts</Link>
            </div>

            {/* Exact es para que no muestre los dos componentes al tiempo */}
            <Route exact path="/" render={() => {
              return <Lelist />
            }}>
            </Route>
            {/* Dos formas de hacer lo mismo: */}
            {/* <Route path="/posts" render={() => <Posts />}>  */}
            <Route path="/posts" component={Posts}>
            </Route>
          </Router>
        </center>
      </header>
      <footer>
        <DevelopedBy />
      </footer>
    </div>
  );
}

export default App;
