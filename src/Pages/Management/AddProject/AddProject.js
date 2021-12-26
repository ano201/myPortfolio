import React, { useState } from "react";
import {
  Alert,
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

const AddProject = () => {
  const classes = useStyles();
  const [success, setSuccess] = useState(false);

  const [projectData, setProjectData] = useState([]);
  const [file, setFile] = useState(null);

  const handleonBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProjectData = { ...projectData };
    newProjectData[field] = value;
    setProjectData(newProjectData);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", projectData.name);
    formData.append("userWork", projectData.userWork);
    formData.append("adminWork", projectData.adminWork);
    formData.append("authentication", projectData.authentication);
    formData.append("routing", projectData.routing);
    formData.append("about", projectData.about);
    formData.append("responsive", projectData.responsive);
    formData.append("database", projectData.database);
    formData.append("hostingDatabase", projectData.hostingDatabase);
    formData.append("payment", projectData.payment);
    formData.append("live", projectData.live);
    formData.append("sourceCode", projectData.sourceCode);
    formData.append("serverCode", projectData.serverCode);
    formData.append("file", file);

    fetch("http://localhost:5000/projects", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        e.target.reset();
        setSuccess(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box sx={{ flexGrow: 1, mt: "10rem" }}>
      <Container>
        <form onSubmit={handleSubmit}>
          <Paper
            elevation={24}
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
              name="name"
              required
            />
            <TextField
              label="Users Work"
              className={classes.root}
              InputProps={{ style: { color: "#4df1aa" } }}
              InputLabelProps={{ style: { color: "#4df1aa" } }}
              variant="outlined"
              onBlur={handleonBlur}
              name="userWork"
              required
            />
            <TextField
              label="Admins Work"
              className={classes.root}
              InputProps={{ style: { color: "#4df1aa" } }}
              InputLabelProps={{ style: { color: "#4df1aa" } }}
              variant="outlined"
              onBlur={handleonBlur}
              name="adminWork"
              required
            />
            <TextField
              label="Authenticated By"
              className={classes.root}
              InputProps={{ style: { color: "#4df1aa" } }}
              InputLabelProps={{ style: { color: "#4df1aa" } }}
              variant="outlined"
              onBlur={handleonBlur}
              name="authentication"
              required
            />
            <TextField
              label="Routed by"
              className={classes.root}
              InputProps={{ style: { color: "#4df1aa" } }}
              InputLabelProps={{ style: { color: "#4df1aa" } }}
              variant="outlined"
              onBlur={handleonBlur}
              name="routing"
              required
            />
            <TextField
              label="About"
              className={classes.root}
              InputProps={{ style: { color: "#4df1aa" } }}
              InputLabelProps={{ style: { color: "#4df1aa" } }}
              variant="outlined"
              onBlur={handleonBlur}
              name="about"
              required
            />
            <TextField
              label="Responsive with"
              className={classes.root}
              InputProps={{ style: { color: "#4df1aa" } }}
              InputLabelProps={{ style: { color: "#4df1aa" } }}
              variant="outlined"
              onBlur={handleonBlur}
              name="responsive"
              required
            />
            <TextField
              label="Database"
              className={classes.root}
              InputProps={{ style: { color: "#4df1aa" } }}
              InputLabelProps={{ style: { color: "#4df1aa" } }}
              variant="outlined"
              onBlur={handleonBlur}
              name="database"
              required
            />
            <TextField
              label="Hosting Database"
              className={classes.root}
              InputProps={{ style: { color: "#4df1aa" } }}
              InputLabelProps={{ style: { color: "#4df1aa" } }}
              variant="outlined"
              onBlur={handleonBlur}
              name="hostingDatabase"
              required
            />
            <TextField
              label="Payment (Optional)"
              className={classes.root}
              InputProps={{ style: { color: "#4df1aa" } }}
              InputLabelProps={{ style: { color: "#4df1aa" } }}
              variant="outlined"
              onBlur={handleonBlur}
              name="payment"
            />
            <TextField
              label="Live Link"
              className={classes.root}
              InputProps={{ style: { color: "#4df1aa" } }}
              InputLabelProps={{ style: { color: "#4df1aa" } }}
              variant="outlined"
              onBlur={handleonBlur}
              name="live"
              required
            />
            <TextField
              label="Source Code"
              className={classes.root}
              InputProps={{ style: { color: "#4df1aa" } }}
              InputLabelProps={{ style: { color: "#4df1aa" } }}
              variant="outlined"
              onBlur={handleonBlur}
              name="sourceCode"
              required
            />
            <TextField
              label="Server Code"
              className={classes.root}
              InputProps={{ style: { color: "#4df1aa" } }}
              InputLabelProps={{ style: { color: "#4df1aa" } }}
              variant="outlined"
              onBlur={handleonBlur}
              name="serverCode"
              required
            />

            <TextField
              className={classes.root}
              InputProps={{ style: { color: "#4df1aa" } }}
              InputLabelProps={{ style: { color: "#4df1aa" } }}
              variant="outlined"
              onChange={handleFileChange}
              type="file"
              required
            />

            <Grid sx={{ fontWeight: "bold", mt: 4, textAlign: "center" }}>
              <button type="submit" className="hovered-btn">
                Add Project
              </button>
              {success && (
                <Alert sx={{ mt: 2 }} variant="outlined" severity="success">
                  This is an info alert — check it out!
                </Alert>
              )}
            </Grid>
          </Paper>
        </form>
      </Container>
    </Box>
  );
};

export default AddProject;
