import React from 'react';
import { Box, Grid } from '@mui/material';

const Sections = () => {
    return (
        <Box sx={{ flexGrow: 1 }} >
<Grid sx={{ display: 'flex', flexDirection: { xs: 'row', sm: 'row', md: 'column', lg: 'column', xl: 'cokumn' }, justifyContent: 'space-around' }} >
<h1>skil</h1>
<h1>skil</h1>
<h1>skil</h1>
<h1>skil</h1>
<h1>skil</h1>
</Grid>
        </Box>
    );
};

export default Sections;