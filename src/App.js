import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PageError from './components/PageError';
import NavBar from './components/NavBar';
import theme from './themeConfig';

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <NavBar/>
        </ThemeProvider>
        <Switch>
          <Route path="/" exact>
            <Home title="tesla" date="2021-07-19" />
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/register" exact>
            <Register/>
          </Route>
          <Router>
            <PageError />
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
