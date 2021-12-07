import React from 'react';
import Box from '@mui/material/Box';
import { Container, Grid, Typography } from '@mui/material';
import footerMe from '../../../images/footerMe.png';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: '10rem' }}>
            <Container>
                <Grid container>
                    <Grid xs={12} sm={12} md={8} lg={6} xl={6} sx={{ m: 'auto' }} >
                        <Grid sx={{ m: 'auto', width: 1 / 2 }} >
                            <img src={footerMe} alt="" />
                        </Grid>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={6} xl={6} sx={{ m: 'auto' }} >
                        <Typography
                            variant="subtitle2"
                            component="div"
                            sx={{ flexGrow: 1, textAlign: {xs: 'center', sm: 'center', lg: 'left', xl: 'left'}, my: { xs: '2rem', sm: '2rem' } }}
                            className='neon-text'
                        >
                            Quality-focused and results-driven professional seeking a position as a web developer where I can use my skills to enhance the user experience...
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;