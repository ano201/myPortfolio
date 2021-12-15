import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
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

  const { user, userLogin, error, loading } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const [loginData, setLoginData] = useState({});

  const handleonBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin(loginData.email, loginData.password, location, history);
    console.log(error);
  };

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
        <form onSubmit={handleSubmit}>
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
              label="Email"
              className={classes.root}
              InputProps={{ style: { color: "#4df1aa" } }}
              InputLabelProps={{ style: { color: "#4df1aa" } }}
              variant="outlined"
              onBlur={handleonBlur}
              name="email"
              type="email"
            />
            <TextField
              label="Password"
              className={classes.root}
              InputProps={{ style: { color: "#4df1aa" } }}
              InputLabelProps={{ style: { color: "#4df1aa" } }}
              variant="outlined"
              onBlur={handleonBlur}
              name="password"
              type="password"
            />
            <Grid sx={{ fontWeight: "bold", mt: 4, textAlign: "center" }}>
              <button type="submit" className="hovered-btn">
                Login
              </button>
            </Grid>
          </Paper>
        </form>
      </Container>
    </Box>
  );
};

export default Login;
