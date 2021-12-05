import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: '10rem' }}>
            <Typography
                variant="h1"
                component="div"
                sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'center', md: 'left' }, my: { xs: '2rem', sm: '2rem' } }}
                className='light-text'
            >
                Footer
            </Typography>
        </Box>
    );
};

export default Footer;