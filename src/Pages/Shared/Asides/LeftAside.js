import React from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';

const LeftAside = () => {

	const mailAddress = 'ahmu689@gmail.com';
	const stringArray = mailAddress.split("");

    return (
        <Box sx={{  }} >
            <Grid sx={{ width: '5rem', height: '70vh', display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' }, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', position: 'fixed', border: 2 }} >
				<Grid>
				<a className="link" target='blank' href='mailto:ahmu689@gmail.com'>
               {stringArray.map(letter => <Typography className='neon-text' variant="h6" display="block" sx={{ textAlign: 'center' }}>
                    {letter}
                </Typography>)}
            </a>
			</Grid>
			<Grid sx={{ height: '90%', borderLeft: 2, borderColor: '#4df1aa', mt: 1 }}>
                                                            </Grid>
			</Grid>
        </Box>
    );
};

export default LeftAside;