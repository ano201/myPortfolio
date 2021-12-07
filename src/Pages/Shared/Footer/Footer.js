import React from 'react';
import Box from '@mui/material/Box';
import { Container, Grid, Typography } from '@mui/material';
import footerMe from '../../../images/footerMe.png';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: '10rem' }}>
            <Container>
            <Grid>
                <Grid sx={{ m: 'auto', weight: 1/4 }} >
                    <img src={footerMe} />
                </Grid>
            </Grid>
            <Grid>
                <Typography
                                variant="subtitle2"
                                component="div"
                                sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'center', md: 'left' }, my: { xs: '2rem', sm: '2rem' } }}
                                className='neon-text'
                            >
                            Quality-focused and results-driven professional seeking a position as a web developer where I can use my skills to enhance the user experience...
                </Typography>
            </Grid>
            </Container>
        </Box>
    );
};

export default Footer;