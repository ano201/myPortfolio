import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <Box id="allProjects" sx={{ flexGrow: 1, mt: "10rem" }}>
      <Typography
        variant="h1"
        component="div"
        sx={{
          flexGrow: 1,
          textAlign: { xs: "center", sm: "center", md: "left" },
          my: { xs: "2rem", sm: "2rem" },
        }}
        className="light-text"
      >
        All Projects
      </Typography>
      <Grid>
        {projects.map((project) => (
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: { xs: "center", sm: "center", md: "left" },
              my: { xs: "2rem", sm: "2rem" },
            }}
            className="neon-text"
          >
            Projects
          </Typography>
        ))}
      </Grid>
    </Box>
  );
};

export default AllProjects;
