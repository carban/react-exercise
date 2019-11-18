import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lelist from './lelist.js';
import Posts from "./posts";
import Mapi from "./lemap";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Developed by Component
function DevelopedBy(){
  return <h2>Developed by Carban</h2>
}

function App() {
  return (
    <div className="App">
      {/* Leaflet */}
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossOrigin=""/>
      <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js" integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew==" crossOrigin=""></script>
      {/* End leaflet */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <center>
          <Router>
            {/* Link dentro de Router */}
            <div className="navig">
              <Link to="/">ToDo</Link>
              <br></br>
              <Link to="/posts">Posts</Link>
              <br></br>
              <Link to="/mapi">Mapi</Link>
            </div>

            {/* Exact es para que no muestre los dos componentes al tiempo */}
            <Route exact path="/" render={() => {
              return <Lelist />
            }}>
            </Route>
            {/* Dos formas de hacer lo mismo: */}
            {/* <Route path="/posts" render={() => <Posts />}>  */}
            <Route path="/posts" component={Posts}></Route>
            <Route exact path="/mapi" component={Mapi}></Route>
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
