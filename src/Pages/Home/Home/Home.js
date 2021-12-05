import { Grid, Box, Container } from '@mui/material';
import React from 'react';
import Banner from '../Banner/Banner';
import AboutMe from './../AboutMe/AboutMe';
import ContactForm from '../Form/ContactForm';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';


const Home = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid>
                    <Banner></Banner>
                    <AboutMe></AboutMe>
                    <Skills></Skills>
                    <Projects></Projects>
                    <ContactForm></ContactForm>
                </Grid>
            </Container>
        </Box>
    )
};

export default Home;