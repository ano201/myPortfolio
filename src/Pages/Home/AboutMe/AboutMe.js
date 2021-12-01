import { Grid } from '@mui/material';
import React from 'react';
import { Box, Typography } from '@mui/material';
import aboutMe from '../../../images/aboutMe.png';
import { HashLink } from 'react-router-hash-link';

const AboutMe = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: '10rem' }} id='aboutme'>
            <Grid container>
                <Grid md={6} sm={12} sx={{ mt: { md: '10rem', sm: '5rem', lg: '5rem' } }}>
                    <img src={aboutMe} alt="" />
                </Grid>
                <Grid md={6} sm={12}>
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'center', md: 'left' }, my: { xs: '2rem', sm: '2rem' } }}
                        className='light-text'
                    >
                        About Me
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        className='dark-text'
                    >
                        Hi, I’m Murad. I'm a multi-talented human with over 2 years of experiences in wide range of developing disciplines.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, mt: 2 }}
                        className='dark-text'
                    >
                        I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, mt: 2 }}
                        className='dark-text'
                    >
                        Fueled by high energy levels and boundless enthusiasm, I’m easily inspired and more then willing to follow my fascinations wherever they take me. I’m passionate, expressive, multi-talented spirit with a natural ability to entertain and inspire. I’m never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on them.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, mt: 2 }}
                        className='dark-text'
                    >
                        My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and artistic endeavors. I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, mt: 2 }}
                        className='dark-text'
                    >
                        You can read more about my biography, experience, skills, education and much more in the PDF attached bellow:
                    </Typography>
                    <Grid sx={{ fontWeight: 'bold', mt: 2 }}>
                        <HashLink to='/home#aboutme'><button className='hovered-btn'>Resume</button></HashLink>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutMe;