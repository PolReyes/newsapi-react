import React from 'react';
import { useState } from "react";
import {FormGroup, FormLabel, TextField, Typography, Button} from '@material-ui/core';
import { Box, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Login = ({handleLogged}) => {
    const [dataLogin, setDataLogin] = useState({
        emailLogin: "",
        passLogin: "",
    });
    
    const handleInput = (event) => {
        const { value, name } = event.target;
        
        setDataLogin({
            ...dataLogin,
            [name]: value,
        });
    };
    
    const handleSubmit = () => {
        const { emailLogin, passLogin } = dataLogin;
        window.Identity.login(emailLogin, passLogin, { rememberMe: true })
            .then((res) => {
                handleLogged();
            })
            .catch((err) => {
                console.log("Oops algo falló", err);
            });
        console.log(emailLogin,passLogin);
    };

    
    return (
        <div>
            <Grid container>
                <Grid item md={4}>
                </Grid>
                <Grid item md={4} xs={12}>
                <Box m={2} p={2} boxShadow={3}>
                    <form>
                        <FormLabel color="secondary">
                            <h1>Iniciar sesión</h1>
                        </FormLabel>
                        <FormGroup>    
                            <TextField type="email" name="emailLogin" label="Ingresar email" required onChange={handleInput} /><br />
                            <TextField type="password" name="passLogin" label="Ingresar contraseña" required onChange={handleInput} /><br/>
                            <Button type="button" name="btnLogin" variant="contained" color="primary" onClick={handleSubmit}>Ingresar</Button>
                        </FormGroup>
                    </form>
                </Box>
                <Link to="/ForgotPass" className="link">
                    <Button variant="contained">
                        Olvidé mi contraseña
                    </Button>
                </Link>
                </Grid>
                <Grid item md={4}>
                </Grid>
            </Grid>
        </div>
    );

    /*
    return (
        <div className="App">
          <h1>Iniciar Sesión</h1>
          <form>
            <input
              type="email"
              name="emailLogin"
              placeholder="Ingresa Correo"
              required
              onChange={handleInput}
            ></input>
            <input
              type="password"
              name="passLogin"
              placeholder="Ingresa Contraseña"
              required
              onChange={handleInput}
            ></input>
            <button type="button" name="btnLogin" onClick={handleSubmit}>
              Inicar Sesión
            </button>
          </form>
        </div>
      );
      */
      
}

export default Login;