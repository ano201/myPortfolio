import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Familiar = () => {
  return (
    <Box id="skills" sx={{ flexGrow: 1, mt: "3rem" }}>
      <Typography
        variant="h4"
        component="div"
        sx={{
          flexGrow: 1,
          my: "1rem",
        }}
        className="dark-text"
      >
        Familiar
      </Typography>
      <Grid
        sx={{
          m: "auto",
          maxWidth: {
            xs: "20rem",
            sm: "20rem",
            md: "30rem",
            lg: "30rem",
            xl: "30rem",
          },
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            my: "1rem",
          }}
          className="neon-text"
        >
          NodeJS • Redux • TypeScript • Next JS
        </Typography>
      </Grid>
    </Box>
  );
};

export default Familiar;
