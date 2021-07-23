import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import NavBar from './components/NavBar';
import theme from './themeConfig';

function App() {
  return (
    
      <Router>
    <div className="App">
      <ThemeProvider theme={theme}>
      <NavBar/>
      </ThemeProvider>
        
        
        <Switch>
          <Route path="/" exact>
            <h1>NOTICIAS</h1>
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
