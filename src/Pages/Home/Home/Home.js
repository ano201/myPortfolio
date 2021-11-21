import { Grid, Box, Container } from '@mui/material';
import React from 'react';
import Banner from '../Banner/Banner';
import Navigation from './../Navigation/Navigation';


const Home = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
            
=======
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Navigation></Navigation>
>>>>>>> b7b5aadc0c6eacaa98bc454b47ccb16df9e06650
            <Container>
                <Grid container>
                    <Grid>
                        <Banner></Banner>
                    </Grid>
                </Grid>
            </Container>
        </Box>
  );
};

export default Home;