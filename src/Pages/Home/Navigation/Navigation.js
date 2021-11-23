import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { HashLink } from 'react-router-hash-link';
import { Grid } from '@mui/material';
import NavDrawer from './NavDrawer/NavDrawer';





const Navigation = () => {

    const [state, setState] = useState({
        right: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({  ...state, [anchor]:open });
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{ background: '#0a192f8e'}} position="fixed">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            Murad
                        </Typography>
                        <Grid sx={{ display: { xs: 'none', md: 'block' } }}>
                            <HashLink className='link link-nav' to='/home#home'>Home</HashLink>                            
                            <HashLink className='link link-nav' to='/home#aboutme'>About Me</HashLink>
                            <HashLink className='link link-nav' to='/home#projects'>Projects</HashLink>
                            <HashLink className='link link-nav' to='/home#home'>Resume</HashLink>
                        </Grid>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2, display: { md: 'none' } }}
                            onClick={toggleDrawer('right', true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <NavDrawer toggleDrawer={toggleDrawer} state={state} ></NavDrawer>
        </div>
    );
};

export default Navigation;