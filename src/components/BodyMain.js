import React from 'react';
import {  Button } from '@material-ui/core';
import newsDefault from '../news-default.jpg';

const BodyMain = (props) => {
    const listNews = props.listNews;
    
    return (
      <>
      {
        // DEMO: listado de noticias obtenidas
        (listNews.articles ?
          <>
          <h3>Noticia Reciente</h3>
          <hr></hr>
          <br></br>
          <img className="img" alt="Noticia-Reciente" src={listNews.articles[0].urlToImage ? listNews.articles[0].urlToImage: newsDefault} />
          <h3 ><a href={listNews.articles[0].url}>{listNews.articles[0].title}</a></h3>
          <h4>{listNews.articles[0].description}</h4><a className="link" href={listNews.articles[0].url}><Button variant="contained" color="primary"> Ver Más</Button></a>
          <h5>{listNews.articles[0].author} - Fecha: {listNews.articles[0].publishedAt.slice(0,10) } - Hora: {listNews.articles[0].publishedAt.slice(11,-1)  }  </h5>         
          </>            
          : "Cargando...")
      }        
      </>
    );
}

export default BodyMain;
