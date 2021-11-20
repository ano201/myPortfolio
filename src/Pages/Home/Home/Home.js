import { Grid, Box, Container } from '@mui/material';
import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
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