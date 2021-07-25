import {AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


//Editar espacio del NavBar offset, Titulo izquierda, felxGrow ocupa todo el espacio. 
const useStyles = makeStyles(theme=>({
    offset: theme.mixins.toolbar,
    title: {
        textAlign:'left',
        flexGrow:1,
        color:'inherit',
        textDecoration:'none'},
    btnLogin:{
        marginRight: theme.spacing(2)
    },
    btnCerrar:{
        marginLeft: theme.spacing(2)
    }
}))

const NavBar = ({isLogged}) => {
    const classes = useStyles();

    const [fullName, setFullName] = useState();
    
    useEffect(() => {
        if (isLogged == false) {
           // console.log(isLogged)
        } else {
            window.Identity.getUserProfile()
            .then((res) => {
                const { firstName, lastName, secondLastName } = res;
                setFullName(firstName + " " + lastName + " " + secondLastName);
                
            })
            .catch((err) => {
                console.log("Oops algo falló", err);
                
            }); 
        }
        
    }, [isLogged]);
    
    return (
        <>
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
                            <Link to="/logout" className="link">
                                <Button variant="contained" color="secondary" className={classes.btnCerrar}>
                                    Cerrar Sesión
                                </Button>
                            </Link>
                            </>
                        ) : (
                            <>
                            <Link to="/login" className="link">
                                <Button variant="contained" color="secondary" className={classes.btnLogin}>
                                    Iniciar Sesión
                                </Button>
                            </Link>
                            <Link to="/register" className="link">
                                <Button variant="contained" color="secondary">
                                    Registrarse
                                </Button>
                            </Link>
                            </>
                    )}
            </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </>
    );
}

export default NavBar;
