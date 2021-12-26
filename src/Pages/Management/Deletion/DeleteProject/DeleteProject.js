import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const DeleteProject = ({ project, handleDelete }) => {
  const image = project.image;
  const { name } = project.data;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <Card>
        <CardMedia
          component="img"
          image={`data:image/png;base64,${image.img} `}
          height="140"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            sx={{ color: "#117864" }}
            onClick={() => handleDelete(project._id)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default DeleteProject;
