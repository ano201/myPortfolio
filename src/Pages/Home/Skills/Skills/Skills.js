import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

const Skills = () => {

    let { path, url } = useRouteMatch();

    return (
        <Box id='skills' sx={{ flexGrow: 1, mt: '10rem' }}>
            <Typography
                variant="h3"
                component="div"
                sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'center', md: 'left' }, my: { xs: '2rem', sm: '2rem' } }}
                className='light-text'
            >
                Skills
            </Typography>
            <Grid>
                <Link to={`${url}/rendering`}>Expert</Link>
                <Link to={`${url}/rendering`}>Familier</Link>
                <Link to={`${url}/rendering`}>Rendering with React</Link>
            </Grid>
            <Grid>
                <Switch>
                    
                </Switch>
            </Grid>
        </Box>
    );
};

export default Skills;