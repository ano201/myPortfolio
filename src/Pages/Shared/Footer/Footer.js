import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: '10rem' }}>
            <Typography
                variant="subtitle2"
                component="div"
                sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'center', md: 'left' }, my: { xs: '2rem', sm: '2rem' } }}
                className='neon-text'
            >
            Quality-focused and results-driven professional seeking a position as a web developer where I can use my skills to enhance the user experience...
            </Typography>
        </Box>
    );
};

export default Footer;