import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#4df1aa0e",
    marginTop: "2rem",
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#4df1aa",
      },
    },
  },
});

const Login = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1, mt: "10rem" }}>
      <Container>
        <Typography
          variant="h2"
          component="div"
          sx={{
            textAlign: { xs: "center", sm: "center", md: "left" },
            mb: 1,
          }}
          className="neon-text"
        >
          Admin Login
        </Typography>
        <Paper
          elevation={12}
          sx={{
            backgroundColor: "inherit",
            p: 2,
            m: "auto",
            width: { md: "80%" },
          }}
        >
          <TextField
            label="Name"
            className={classes.root}
            InputProps={{ style: { color: "#4df1aa" } }}
            InputLabelProps={{ style: { color: "#4df1aa" } }}
            variant="outlined"
          />
          <TextField
            label="Email"
            className={classes.root}
            InputProps={{ style: { color: "#4df1aa" } }}
            InputLabelProps={{ style: { color: "#4df1aa" } }}
            variant="outlined"
          />
          <TextField
            label="Message"
            className={classes.root}
            InputProps={{ style: { color: "#4df1aa" } }}
            InputLabelProps={{ style: { color: "#4df1aa" } }}
            variant="outlined"
          />
          <Grid sx={{ fontWeight: "bold", mt: 4, textAlign: "center" }}>
            <button className="hovered-btn">Login</button>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
