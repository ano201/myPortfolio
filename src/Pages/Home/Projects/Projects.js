import React from 'react';
import { Box, Typography } from '@mui/material';

const Projects = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: '10rem' }}>
            <Typography
                variant="h1"
                component="div"
                sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'center', md: 'left' }, my: { xs: '2rem', sm: '2rem' } }}
                className='light-text'
            >
                Projects
            </Typography>
        </Box>
    );
};

export default Projects;