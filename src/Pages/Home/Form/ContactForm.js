import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';



const ContactForm = () => {

    return (
        <Box>
            <Paper
                elevation={3}
                sx={{ backgroundColor: 'inherit' }}
            >
                <form>
                    <TextField label="Email"
                    InputLabelProps={{ className: 'textField' }}
                    focused />
                </form>
            </Paper>
        </Box>
    );
};

export default ContactForm;