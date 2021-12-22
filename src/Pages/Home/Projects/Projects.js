import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://infinite-ridge-52082.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <Box id="projects" sx={{ flexGrow: 1, mt: "10rem" }}>
      <Typography
        variant="h3"
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

export default Projects;
