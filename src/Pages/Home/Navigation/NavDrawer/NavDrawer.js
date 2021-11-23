import React from 'react';
import Drawer from '@mui/material/Drawer';
	

const NavDrawer = ({toggleDrawer, state}) => {

	
	
    return (
        <div>
            <Drawer
				sx={{backgroundColor: "#0a192f8e"}}
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