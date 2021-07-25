import { ThemeProvider } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import PageError from './components/PageError';
import NavBar from './components/NavBar';
import theme from './themeConfig';

function App() {
  const UrlBase = "https://api-sandbox.elcomercio.pe";

  const urlSDK = "https://arc-subs-sdk.s3.amazonaws.com/sandbox/sdk-identity.min.js";

  const [isLogged, setIsLogged] = useState(false);
  
  useEffect(() => {
    const sdkIdentity = document.createElement("script");
    sdkIdentity.src = urlSDK;
    sdkIdentity.onload = function () {
      window.Identity.apiOrigin = UrlBase;
      window.Identity.isLoggedIn()
        .then((res) => {
          if(res === true){
            setIsLogged(true);
          }
        })
        .catch((err) => {
          console.log("Oops algo falló", err);
        });
    };
    document.body.appendChild(sdkIdentity);
    console.log("identity inicial: "+window.Identity);
  }, []);

  const handleLogout = () => {
    window.Identity.logout().then((res) => {
      setIsLogged(false);
    });
  };

  const handleLogged = () => {
    window.Identity.isLoggedIn()
      .then((res) => {
        if (res === true) {
          setIsLogged(true);
        }
      })
      .catch((err) => {
        console.log("Oops algo falló", err);
        
      });
  };

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <div>
          <NavBar isLogged={isLogged}/>
          </div>
          
        </ThemeProvider>
        <Switch>
          <Route path="/" exact>
            <Home title="tesla" date="2021-07-19" />
          </Route>
          <Route path="/login" exact>
            {isLogged ? <Redirect to="/" /> : <Login handleLogged={handleLogged}/>}
          </Route>
          <Route path="/register" exact>
            {isLogged ? <Redirect to="/" /> : <Register handleLogged={handleLogged} />}
          </Route>
          <Route path="/logout" exact>
            <Logout handleLogout={handleLogout} />
          </Route>
          <Route>
            <PageError />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
