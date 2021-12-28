import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import SingleProject from "../../Shared/SingleProject/SingleProject";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <Box id="projects" sx={{ flexGrow: 1, mt: "10rem" }}>
      {projects?.length > 0 && (
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
      )}
      <Container>
        {projects.map((project) => (
          <SingleProject key={project._id} project={project}></SingleProject>
        ))}
      </Container>
    </Box>
  );
};

export default Projects;
