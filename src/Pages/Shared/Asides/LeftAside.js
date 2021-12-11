import React from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';

const LeftAside = () => {

	const mailAddress = 'AHMU689@GMAIL.COM';
	const stringArray = mailAddress.split("");

    return (
        <Box sx={{  }} >
            <Grid sx={{ width: '2rem', height: '70vh', display: { xs: 'none', sm: 'none', md: 'none', lg: 'inline-flex', xl: 'inline-flex' }, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', position: 'fixed', border: 2 }} >
				<Grid>
				<a className="link" target='blank' href='mailto:ahmu689@gmail.com'>
               {stringArray.map(letter => <Typography className='neon-text' variant="h6" sx={{ textAlign: 'center', mt: '-1rem' }}>
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