import React from 'react';
import { Box, Typography } from '@mui/material';

const Projects = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: '10rem' }}>
            <Typography
                variant="h3"
                component="div"
                sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'center', md: 'left' }, my: { xs: '2rem', sm: '2rem' } }}
                className='neon-text'
            >
                Projects
            </Typography>
        </Box>
    );
};

export default Projects;