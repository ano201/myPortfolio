import { Typography, Box, Grid } from '@mui/material';
import React from 'react';

const Banner = () => {
    return (
        <Box>
            <Grid sx={{ flexGrow: 1 }}>
                <Typography className='neon-text' variant="h5" component="div" gutterBottom>
                    Hi, My name is
                </Typography>
                <Typography className='light-text' sx={{ fontWeight: 'bold' }} variant="h3" component="div" gutterBottom>
                    Md. Murad Hossain
                </Typography>
                <Typography className='dark-text' sx={{ fontWeight: 'bold', mt: -3 }} variant="h3" component="div" gutterBottom>
                    I'm a Frontend web devloper
    I develop users interface...
                </Typography>
            </Grid>
        </Box>
    );
};

export default Banner;