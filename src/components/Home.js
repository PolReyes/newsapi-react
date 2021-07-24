import React from 'react';
import BodyMain from './BodyMain';
import BodyRight from './BodyRight';
import BodyFoot from './BodyFoot';
import { Box, Grid } from '@material-ui/core';

const Home = () => {
    return (
    <div>
        <Grid container>
              <Grid item md={8} xs={12}>
              <Box m={2} p={2} boxShadow={3} >
                <BodyMain title="tesla" date="2021-07-19"/>
              </Box>
              </Grid>
              <Grid item md={4} xs={12}>
                <Box m={2} p={3} boxShadow={3}>
                  <h3>Noticias Relacionadas</h3><hr></hr>
                  <BodyRight title="tesla" date="2021-07-19"/>
                </Box>
              </Grid>
        </Grid>
        <Grid container>
              <BodyFoot title="tesla" date="2021-07-19"/>
        </Grid>
    </div>
    )
}

export default Home