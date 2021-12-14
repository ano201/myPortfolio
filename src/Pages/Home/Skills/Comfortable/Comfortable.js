import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Comfortable = () => {
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
        Comfortable
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
          MongoDB • Firebase • Netlify • Heroku
        </Typography>
      </Grid>
    </Box>
  );
};

export default Comfortable;
