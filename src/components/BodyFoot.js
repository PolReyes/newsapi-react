import React, {Fragment} from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import newsDefault from '../news-default.jpg';

const BodyFoot = (props) => {
    const listNews = props.listNews;

    return (
      <>  
      {
        listNews.articles?
        // DEMO: listado de noticias obtenidas
        listNews.articles.map((item,index) => (
          <Fragment key={index}>
            
            <Grid item md={4} xs={12}>
              <Box m={1} p={2} boxShadow={3} height={400} > 
                <br></br>       
                <img loading="lazy" className="img-foot" alt="Noticia-foot" src={item.urlToImage ? item.urlToImage: newsDefault} />
                <h4>{item.title}</h4>
                <a className="link" href={item.url}><Button variant="contained" color="primary"> Ver Más</Button></a>
              </Box>
            </Grid>
          </Fragment>
        )):"Cargando..."
      }
      </>
    );
}

export default BodyFoot;
