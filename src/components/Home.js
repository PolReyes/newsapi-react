import React from 'react';
import { useState, useEffect } from "react";
import BodyMain from './BodyMain';
import BodyRight from './BodyRight';
import BodyFoot from './BodyFoot';
import { Box, Grid } from '@material-ui/core';


const Home = (props) => {
    const [listNews, setListNews] = useState({});
    useEffect(() => {
        // DEMO: Para obtener los datos de la API en nuestro localhost usar un proxy
        // URL API: https://newsapi.org/v2/everything?q=tesla&from=2021-06-19&sortBy=publishedAt&apiKey=0c76dce6efd947d0bd1f6ac1f4324b9e
    
        //const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // URL PROXY (si no te permite por temas de permisos)
        const qInTitle = props.title; // noticias sobre "tesla"
        const from =props.date; // fecha noticias publicadas (desde)
        const apiKey = "5f10d68cf66b42b8b34f73b0f82d3f65"; // reemplazar tu API KEY
        const url = `https://newsapi.org/v2/everything?q=${qInTitle}&from=${from}&sortBy=publishedAt&apiKey=${apiKey}`;
        const request = new Request(url);
        
        fetch(request)
          .then((response) => response.json()) // convierte a JSON
          .then((news) => {
            // si todo es correcto lista los resultados en consola
            console.log(news);
            setListNews(news);
            
          })
          .catch((error) => {
            // si hubo un error impreme los detalles en consola
            console.log(error);
          });
      }, [props]);
    return (
    <div>
        <Grid container>
              <Grid item md={8} xs={12}>
              <Box m={2} p={2} boxShadow={3} >
                <BodyMain listNews={listNews} />
              </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <Box m={2} p={3} boxShadow={3}>
                  <h3>Noticias Relacionadas</h3>
                  <hr></hr>
                  <BodyRight listNews={listNews} />
                </Box>
              </Grid>
        </Grid>
        <Grid container>
              <Grid item md={12} xs={12}>
              <Box  p={2}>
                <h3>Más Noticias</h3>
                <hr></hr>
              </Box>
              </Grid>
              <BodyFoot listNews={listNews} />
        </Grid>
    </div>
    );
}

export default Home;