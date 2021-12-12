import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Sections from './../Sections/Sections';

const Skills = () => {

    return (
        <Box id='skills' sx={{ flexGrow: 1, mt: '10rem' }}>
            <Typography
                variant="h3"
                component="div"
                sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'center', md: 'left' }, my: { xs: '2rem', sm: '2rem' } }}
                className='neon-text'
            >
                My Skills
            </Typography>
            <Grid>
                <Sections></Sections>
            </Grid>
            <Grid>
            </Grid>
        </Box>
    );
};

export default Skills;