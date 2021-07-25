import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { Box, Grid } from '@material-ui/core';

function ForgotPass() {
    const [sendEmail, sendSendEmail] = useState();
    const [dataForgot, setDataForgot] = useState({
        emailForgot: "",
    });

    const handleInput = (event) => {
        const { value, name } = event.target;
        
        setDataForgot({
            ...dataForgot,
            [name]: value,
        });
    };
    
    const handleSubmit = () => {
        const { emailForgot } = dataForgot;
        window.Identity.requestResetPassword(emailForgot)
        .then((res) => {
            sendSendEmail(true);
        })
        .catch((err) => {
            console.log("Oops algo falló", err);
        });
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
                            <h1>Recuperación de contraseña</h1>
                        </FormLabel>
                        {sendEmail ? (
                            <p>Revisa tu bandeja de correo para cambiar tu contraseña</p>
                        ) : (
                        <FormGroup>    
                            <TextField type="email" name="emailForgot" label="Ingresar email" required onChange={handleInput} /><br />
                            <Button type="button" name="btnForgot" variant="contained" color="primary" onClick={handleSubmit}>Enviar</Button>
                        </FormGroup>
                        )}
                    </form>
                </Box>
                </Grid>
                <Grid item md={4}>
                </Grid>
            </Grid>
        </div>
    );
    /*
    return (
    <div className="App">
        <h1>Olvidé mi Contraseña</h1>
      {sendEmail ? (
        <p>Revisa tu bandeja de correo para cambiar tu contraseña</p>
      ) : (
        <form>
          <input
            type="email"
            name="emailForgot"
            placeholder="Ingresa Correo"
            required
            onChange={handleInput}
          ></input>
          <button type="button" name="btnLogin" onClick={handleSubmit}>
            Enviar
          </button>
        </form>
      )}
    </div>
  );*/
}

export default ForgotPass;