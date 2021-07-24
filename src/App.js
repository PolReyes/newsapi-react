import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import BodyMain from './components/BodyMain';
import BodyRight from './components/BodyRight';
import BodyFoot from './components/BodyFoot';
import Login from './components/Login'
import NavBar from './components/NavBar';
import theme from './themeConfig';
import { Box, Grid } from '@material-ui/core'

function App() {
  return (
    
      <Router>
    <div className="App">
      <ThemeProvider theme={theme}>
      <NavBar/>
      </ThemeProvider>
        
        
        <Switch>
          <Route path="/" exact>
          <Grid container>
        <Grid item md={8} xs={12}>
          <Box m={2} p={2} boxShadow={3} >
            <BodyMain title="tesla" date="2021-07-19"/>
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box m={2} p={3} boxShadow={3}>
          <h3>Noticias Relacionadas</h3><hr></hr>
            <BodyRight title="tesla" date="2021-07-19"/>
          </Box>
        </Grid>
        </Grid>
      <Grid container>
        <BodyFoot title="tesla" date="2021-07-19"/>
      </Grid>
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
