import {AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';


//Editar espacio del NavBar offset, Titulo izquierda, felxGrow ocupa todo el espacio. 
const useStyles = makeStyles(theme=>({
    offset: theme.mixins.toolbar,
    title: {
        textAlign:'left',
        flexGrow:1,
        color:'inherit',
        textDecoration:'none'}
    /*btnLogin:{
        marginRight: theme.spacing(2)
    }*/
}))

const NavBar = ({isLogged}) => {
    const classes = useStyles();
    const [fullName, setFullName] = useState();
    
    useEffect(() => {
        window.Identity.getUserProfile()
            .then((res) => {
                const { firstName, lastName, secondLastName } = res;
                setFullName(firstName + " " + lastName + " " + secondLastName);
            })
            .catch((err) => {
                console.log("Oops algo falló", err);
            });
    }, [isLogged]);
    
    return (
        <div>
            <AppBar position="fixed" color="primary"> 
            <Toolbar>
                    <Link to="/"  className={classes.title}>
                        <Typography variant="h5">
                        Noticias
                        </Typography>
                    </Link>
                    {
                        isLogged ? (
                            <>
                            <Typography variant="h5">
                                Bienvenido {fullName}
                            </Typography>
                            <Box m={1}>
                            <Link to="/logout" className="link">
                                <Button variant="contained" color="secondary">
                                    Cerrar Sesión
                                </Button>
                            </Link>
                            </Box>
                            </>
                        ) : (
                            <>
                            <Box m={1}>
                            <Link to="/login" className="link">
                                <Button variant="contained" color="secondary">
                                    Iniciar Sesión
                                </Button>
                            </Link>
                            </Box>
                            <Box m={1} >
                            <Link to="/register" className="link">
                                <Button variant="contained" color="secondary">
                                    Registrarse
                                </Button>
                            </Link>
                            </Box>
                            </>
                    )}
            </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default NavBar
