import React, { useState } from "react";
// import FileBase64 from "react-file-base64";
import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
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

const Management = () => {
  const { logOut } = useAuth();
  const classes = useStyles();

  const [projectData, setProjectData] = useState({});

  const handleonBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProjectData = { ...projectData };
    newProjectData[field] = value;
    setProjectData(newProjectData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(projectData);
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
          Management
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
            <Typography
              variant="h4"
              component="div"
              sx={{
                textAlign: { xs: "center", sm: "center", md: "left" },
                mt: "2rem",
              }}
              className="neon-text"
            >
              Add new project
            </Typography>
            <TextField
              label="Project's Title"
              className={classes.root}
              InputProps={{ style: { color: "#4df1aa" } }}
              InputLabelProps={{ style: { color: "#4df1aa" } }}
              variant="outlined"
              onBlur={handleonBlur}
              name="title"
              required
            />
            <TextField
              label="Description"
              className={classes.root}
              InputProps={{ style: { color: "#4df1aa" } }}
              InputLabelProps={{ style: { color: "#4df1aa" } }}
              variant="outlined"
              onBlur={handleonBlur}
              name="details"
              required
            />

            <TextField
              className={classes.root}
              InputProps={{ style: { color: "#4df1aa" } }}
              InputLabelProps={{ style: { color: "#4df1aa" } }}
              variant="outlined"
              onBlur={handleonBlur}
              name="image"
              type='file'
              required
            />

            <Grid sx={{ fontWeight: "bold", mt: 4, textAlign: "center" }}>
              <button type="submit" className="hovered-btn">
                Add Project
              </button>
            </Grid>
          </Paper>
        </form>
        <Grid sx={{ fontWeight: "bold", mt: 4, textAlign: "center" }}>
          <button onClick={logOut} className="hovered-btn">
            Logout
          </button>
        </Grid>
      </Container>
    </Box>
  );
};

export default Management;
