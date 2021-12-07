import React from 'react';
import Box from '@mui/material/Box';
import { Container, Grid, Typography } from '@mui/material';
import footerMe from '../../../images/footerMe.png';
import facebook from '../../../images/Social/Facebook.svg';
import twitter from '../../../images/Social/Twitter.svg';
import linkedIn from '../../../images/Social/LinkedIN.svg';
import github from '../../../images/Social/Github.svg';

const Footer = () => {
    return (
        <Box>
            <Container sx={{ flexGrow: 1, mt: '10rem', mb: '5rem' }} >
                <Grid container>
                    <Grid xs={12} sm={12} md={8} lg={6} xl={6} sx={{ m: 'auto' }} >
                        <Grid sx={{ m: 'auto' }} >
                            <img src={footerMe} alt="" />
                        </Grid>
                    </Grid>
                    <Grid xs={12} sm={12} md={6} lg={6} xl={6} sx={{ m: 'auto' }} >
                        <Typography
                            variant="subtitle2"
                            component="div"
                            sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'center', lg: 'left', xl: 'left' }, my: { xs: '2rem', sm: '2rem' } }}
                            className='neon-text'
                        >
                            Quality-focused and results-driven professional seeking a position as a web developer where I can use my skills to enhance the user experience...
                        </Typography>
                    </Grid>
                </Grid>
                <Grid sx={{ width: { xs: 1 / 1.5, sm: 1 / 2, md: 1 / 2 }, m: 'auto', display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }, justifyContent: 'space-around' }} >
                    <Grid >
                        <a className="link" target='blank' href='https://www.facebook.com/murad.hossain201'>
                            <img src={facebook} alt='' />
                        </a>
                    </Grid>
                    <Grid >
                        <a className="link" target='blank' href=''>
                            <img src={linkedIn} alt='' />
                        </a>
                    </Grid>
                    <Grid >
                        <a className="link" target='blank' href='https://twitter.com/Muradmt201'>
                            <img src={twitter} alt='' />
                        </a>
                    </Grid>
                    <Grid >
                        <a className="link" target='blank' href=''>
                            <img src={github} alt='' />
                        </a>
                    </Grid>
                </Grid>
                <a className="link" target='blank' href='mailto:ahmu689@gmail.com'>
                    <Typography className='dark-text' variant="h6" display="block" sx={{ textAlign: 'center', mt: '3mm' }}>
                        ahmu689@gmail.com
                    </Typography>
                </a>
            </Container>
            <Typography className='dark-text' variant="caption" display="block" sx={{ textAlign: 'center' }}>
                &copy;2021 Murad.
            </Typography>
        </Box>
    );
};

export default Footer;