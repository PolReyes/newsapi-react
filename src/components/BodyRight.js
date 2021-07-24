import React, {useState, useEffect, Fragment} from 'react'
import { Button, Grid} from '@material-ui/core';

const BodyRight = (props) => {
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

      const data = []

      for (let index = 1; index < 4; index++) {
        listNews.articles ? 
       // console.log(listNews.articles[index]) : console.log("cargando");
       data.push(listNews.articles[index]) : console.log("cargando");
     }
    return (
        <>  
        {
                
          // DEMO: listado de noticias obtenidas
            data?
            data.map((item,index) => (
                <Fragment  key={index}>
                    
                    <Grid container>
                    <Grid item md={5} xs={5}>
                    <img className="img-lateral" alt="Noticia-lateral" src={item.urlToImage}/> 
                    </Grid>
                    
                    <Grid item md={7} xs={7} >
                    <h5>  {item.title}</h5>
                    <a className="link btn-position" href={item.url}><Button size="small" variant="contained" color="primary"> Ver Más</Button></a>
                    </Grid>
                    </Grid>
                    <hr></hr>
                </Fragment>  
              
            )):"Cargando..."
        }
                    
        </>
    )
}

export default BodyRight
