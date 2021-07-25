import React, {Fragment} from 'react'
import { Button, Grid} from '@material-ui/core';
import newsDefault from '../news-default.jpg'

const BodyRight = (props) => {
    const listNews = props.listNews
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
                <img className="img-lateral" alt="Noticia-lateral" src={item.urlToImage ? item.urlToImage: newsDefault} /> 
              </Grid>
              <Grid item md={7} xs={7} >
                <h5>  {item.title}</h5>
                <a className="link btn-position" href={item.url}><Button size="small" variant="contained" color="primary"> Ver Más</Button></a>
              </Grid>
            </Grid>
            <br></br>
            <hr></hr>
          </Fragment>   
          )):"Cargando..."
      }            
      </>
    )
}

export default BodyRight
