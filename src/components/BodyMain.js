import React, {useState, useEffect} from 'react'
import {  Button } from '@material-ui/core'

const BodyMain = (props) => {
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
        <>
        {
          // DEMO: listado de noticias obtenidas
          (listNews.articles ?
            <>
            <img className="img"
          alt="Noticia-Reciente"
          src={listNews.articles[0].urlToImage}
            />
            <h3 ><a href={listNews.articles[0].url}>{listNews.articles[0].title}</a></h3>
            <h4>{listNews.articles[0].description}</h4><a className="link" href={listNews.articles[0].url}><Button variant="contained" color="primary"> Ver Más</Button></a>
            <h5>{listNews.articles[0].author} - Fecha: {listNews.articles[0].publishedAt.slice(0,10) } - Hora: {listNews.articles[0].publishedAt.slice(11,-1)  }  </h5>
                   
            </>            
            : "Cargando...")
        }        
        </>
    )
}

export default BodyMain
