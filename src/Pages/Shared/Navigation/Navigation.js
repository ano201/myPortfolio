import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { HashLink } from 'react-router-hash-link';
import { Grid } from '@mui/material';
import NavDrawer from './NavDrawer/NavDrawer';
import logo from '../../../images/logo.png';
import classNames from 'classnames';




const Navigation = () => {

    const [opened, setOpened] = useState(false);
    const [state, setState] = useState({
        right: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
        setOpened(!opened);
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{ background: '#0a192f8e' }} position="fixed">
                    <Toolbar>
                        <Grid sx={{ width: 1 / 6 }}>
                            <HashLink className='link' to='/home#home'>
                                <img style={{ width: '100%' }} src={logo} alt="" />
                            </HashLink>
                        </Grid>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            <Grid sx={{ display: { xs: 'none', md: 'block' } }}>
                                <HashLink className='link' to='/home#home'>Murad</HashLink>
                            </Grid>
                        </Typography>
                        <Grid sx={{ display: { xs: 'none', md: 'block' } }}>
                            <HashLink className='link link-nav' to='/home#home'>Home</HashLink>
                            <HashLink className='link link-nav' to='/home#aboutme'>About Me</HashLink>
                            <HashLink className='link link-nav' to='/allProjects#allProjects'>Projects</HashLink>
                            <HashLink className='link link-nav' to='/home#contact'>Contact</HashLink>
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
                            <MenuIcon className={classNames({'closed': opened})} />
                            <CloseIcon className={classNames('close-icon', {'closed': !opened})} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <NavDrawer toggleDrawer={toggleDrawer} state={state} ></NavDrawer>
        </div>
    );
};

export default Navigation;