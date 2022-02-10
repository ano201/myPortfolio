import React, { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import DeleteProject from "./DeleteProject/DeleteProject";

const Deletion = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://infinite-ridge-52082.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to Delete?");
    if (proceed) {
      const url = `https://infinite-ridge-52082.herokuapp.com/projects/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Succesfully Deleted");
            const remainingProjects = projects.filter(
              (item) => item._id !== id
            );
            setProjects(remainingProjects);
          }
        });
    }
  };

  return (
    <Box sx={{ flexGrow: 1, mt: "10rem" }}>
      <Container>
        <Grid container spacing={2}>
          {projects.map((project) => (
            <DeleteProject
              key={project._id}
              handleDelete={handleDelete}
              project={project}
            ></DeleteProject>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Deletion;
