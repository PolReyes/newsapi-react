import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login'

function App() {
  return (
    
      <Router>
    <div className="App">
        <h1>NAVBAR- CABECERA</h1>
        <Link to="/">
        Inicio- 
        </Link>
        <Link to="/Login">
        Iniciar Sesión
        </Link>
        <Switch>
          <Route path="/" exact>
            <h2>NOTICIAS</h2>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
        </Switch>     
    </div>
    </Router>
    
  );
}

export default App;
