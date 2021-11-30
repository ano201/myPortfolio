import { Grid, Box, Container } from '@mui/material';
import React from 'react';
import Banner from '../Banner/Banner';
import Navigation from './../Navigation/Navigation';
import AboutMe from './../AboutMe/AboutMe';
import ContactForm from '../Form/ContactForm';


const Home = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Navigation></Navigation>
            <Container>
                <Grid>
                    <Banner></Banner>
                    <AboutMe></AboutMe>
                    <ContactForm></ContactForm>
                </Grid>
            </Container>
        </Box>
    )
};

export default Home;