import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

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

const Management = () => {
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
          Management
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
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, mt: 2 }}
            className="light-text"
            align="center"
          >
            Manage
          </Typography>
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
            <button className="hovered-btn">Update</button>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Management;
