import { Typography, Box, Grid } from '@mui/material';
import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
    return (
        <Box id='home'>
            <Grid sx={{ flexGrow: 1, mt: '6rem' }} sm={12} md={8}>
                <Typography className='neon-text' variant="h5" component="div" gutterBottom>
                    Hi, I am
                </Typography>
                <Grid sx={{ ml: 2 }}>
                    <Typography className='light-text' sx={{ fontWeight: 'bold', mt: 2 }} variant="h2" component="div" gutterBottom>
                        Murad
                    </Typography>
                    <Typography className='dark-text' sx={{ fontWeight: 'bold', mt: -2 }} variant="h3" component="div" gutterBottom>
                        I build users interface...
                    </Typography>
                    <Typography className='dark-text' sx={{ fontWeight: 'bold', mt: '3rem' }} variant="h5" component="div" gutterBottom>
                        I don’t like to define myself by the work I’ve done. I define myself by the work I want to do.
                    </Typography>
                    <Grid sx={{ fontWeight: 'bold', mt: 2 }}>
                        <HashLink to='/home#aboutme'><button className='hovered-btn'>Explore</button></HashLink>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;