import React from 'react';
import { Box, Typography } from '@mui/material';

const Skills = () => {
    return (
        <Box id='skills' sx={{ flexGrow: 1, mt: '10rem' }}>
            <Typography
                variant="h1"
                component="div"
                sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'center', md: 'left' }, my: { xs: '2rem', sm: '2rem' } }}
                className='light-text'
            >
                Skills
            </Typography>
        </Box>
    );
};

export default Skills;