import React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";

const LeftAside = () => {
  const mailAddress = "AHMU689@GMAIL•COM";
  const stringArray = mailAddress.split("");
  let x = 1;

  return (
    <Box sx={{ position: "absolute", mt: 23 }}>
      <Grid
        sx={{
          width: "2rem",
          height: "70vh",
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "inline-flex",
            xl: "inline-flex",
          },
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          position: "fixed",
        }}
      >
        <Grid>
          <a
            className="link"
            rel="noreferrer"
            target="_blank"
            href="mailto:ahmu689@gmail.com"
          >
            {stringArray.map((letter) => (
              <Typography
                className="neon-text"
                variant="subtitle1"
                sx={{ textAlign: "center", mt: "-12px" }}
                key={x++}
              >
                {letter}
              </Typography>
            ))}
          </a>
        </Grid>
        <Grid
          sx={{
            height: "90%",
            borderLeft: 2,
            borderColor: "#4df1aa",
            mt: "-8px",
          }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default LeftAside;
