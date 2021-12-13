import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Expert from "../Expert/Expert";
import Comfortable from "../Comfortable/Comfortable";
import Familiar from "../Familiar/Familiar";

const Skills = () => {
  return (
    <Box id="skills" sx={{ flexGrow: 1, mt: "10rem" }}>
      <Typography
        variant="h3"
        component="div"
        sx={{
          flexGrow: 1,
          textAlign: { xs: "center", sm: "center", md: "left" },
          my: "1rem",
        }}
        className="neon-text"
      >
        My Skills
      </Typography>
      <Grid
        sx={{
          m: "auto",
          width: { sm: 1, xs: 1, md: 1 / 1.2, lg: 1 / 1.2, xl: 1 / 1.2 },
          borderBottom: "1px dashed #11786348",
          borderTop: "1px dashed #11786348",
        }}
      >
        <Expert></Expert>
      </Grid>
      <Grid
        sx={{
          m: "auto",
          width: { sm: 1, xs: 1, md: 1 / 1.2, lg: 1 / 1.2, xl: 1 / 1.2 },
          borderBottom: "1px dashed #11786348",
        }}
      >
        <Comfortable></Comfortable>
      </Grid>
      <Grid
        sx={{
          m: "auto",
          width: { sm: 1, xs: 1, md: 1 / 1.2, lg: 1 / 1.2, xl: 1 / 1.2 },
          borderBottom: "1px dashed #11786348",
        }}
      >
        <Familiar></Familiar>
      </Grid>
    </Box>
  );
};

export default Skills;
