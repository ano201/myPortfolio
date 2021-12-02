import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const useStyles = makeStyles({
    root: {
        width: '100%',
        backgroundColor: "#4df1aa0e",
        marginTop: '2rem',
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#4df1aa'
            }
        }
    }
});

const ContactForm = () => {

    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1, mt: '10rem' }}>
            <Typography
                variant="h3"
                component="div"
                sx={{ flexGrow: 1, textAlign: { xs: 'center', sm: 'center', md: 'left' } }}
                className='light-text'
            >
                Contact
            </Typography>
            <Paper
                elevation={12}
                sx={{ backgroundColor: 'inherit', px: 2, m: 'auto', width: { md: '90%' } }}
            >
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ flexGrow: 1, mt: 2 }}
                    className='light-text'
                    align='center'
                >
                    Would you like to work with me? Awesome!
                </Typography>
                <TextField label="Name"
                    className={classes.root}
                    InputProps={{ style: { color: '#4df1aa' } }}
                    InputLabelProps={{ style: { color: '#4df1aa' } }}
                    variant="outlined"
                />
                <TextField label="Email"
                    className={classes.root}
                    InputProps={{ style: { color: '#4df1aa' } }}
                    InputLabelProps={{ style: { color: '#4df1aa' } }}
                    variant="outlined"
                />
                <TextField label="Message"
                    className={classes.root}
                    InputProps={{ style: { color: '#4df1aa' } }}
                    InputLabelProps={{ style: { color: '#4df1aa' } }}
                    variant="outlined"
                />

            </Paper>
        </Box>
    );
};

export default ContactForm;