import React from 'react';
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/styles';
import { HashLink } from 'react-router-hash-link';


const useStyles = makeStyles({
    paper: {
        width: '50%',
        backgroundColor: "#0a192f4f",
        color: '#4df1aa',
        marginTop: '4rem',
        borderTop: ' 1px dashed'
    }
});


const NavDrawer = ({ toggleDrawer, state }) => {

    const classes = useStyles();

    return (
        <div>
            <Drawer
                classes={{ paper: classes.paper }}
                anchor='right'
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                <HashLink className='link link-nav-drawer' style={{ fontSize: '3rem', color: '#A3E4D7' }} to='/home#home'>Murad</HashLink>
                <HashLink className='link link-nav-drawer' to='/home#home'>Home</HashLink>
                <HashLink className='link link-nav-drawer' to='/home#aboutme'>About Me</HashLink>
                <HashLink className='link link-nav-drawer' to='/home#projects'>Projects</HashLink>
                <HashLink className='link link-nav-drawer' to='/home#contact'>Contact</HashLink>
                <HashLink className='link link-nav-drawer' to='/home#home'>Resume</HashLink>
            </Drawer>
        </div>
    );
};

export default NavDrawer;