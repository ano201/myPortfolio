import React from 'react';
import Drawer from '@mui/material/Drawer';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  paper: {
    backgroundColor: "#0a192f8e"
  }
});


const NavDrawer = ({toggleDrawer, state}) => {

	const classes = useStyles();
	
    return (
        <div>
            <Drawer
				classes={{ paper: classes.paper }}
                anchor='right'
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                <h1>me</h1>
            </Drawer>
        </div>
    );
};

export default NavDrawer;