import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import AddProject from "../AddProject/AddProject";

const Management = () => {
  const { logOut } = useAuth();
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
      </Container>
      <Grid sx={{ fontWeight: "bold", mt: 4, textAlign: "center" }}>
        <AddProject></AddProject>
      </Grid>
      <Grid sx={{ fontWeight: "bold", mt: 4, textAlign: "center" }}>
        <button onClick={logOut} className="hovered-btn">
          Logout
        </button>
      </Grid>
    </Box>
  );
};

export default Management;
