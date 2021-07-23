import {AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
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

const NavBar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar position="fixed" color="primary"> 
            <Toolbar>
                
                    <Link to="/"  className={classes.title}>
                    <Typography variant="h5">
                    Noticias
                    </Typography>
                    </Link>
                    <Link to="/Login" className="link">
                    <Button variant="contained" color="secondary">
                    Iniciar Sesión
                    </Button>
                    </Link>
                
                
            </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default NavBar
