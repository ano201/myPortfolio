import React from "react";
import { Box, Grid } from "@mui/material";
import facebook from "../../../images/Social/Facebook.svg";
import twitter from "../../../images/Social/Twitter.svg";
import linkedIn from "../../../images/Social/LinkedIN.svg";
import github from "../../../images/Social/Github.svg";

const RightAside = () => {
  return (
    <Box sx={{ position: "absolute", right: "5rem" }}>
      <Grid
        sx={{
          width: "5rem",
          height: "70vh",
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
          },
          alignItems: "center",
          flexDirection: "column",
          position: "fixed",
        }}
      >
        <Grid
          sx={{ height: "90%", borderLeft: 2, borderColor: "#4df1aa", mt: 1 }}
        ></Grid>
        <Grid>
          <a
            className="link"
            rel="noreferrer"
            target="blank"
            href="https://www.facebook.com/murad.hossain201"
          >
            <img src={facebook} alt="" />
          </a>
        </Grid>
        <Grid>
          <a
            className="link"
            rel="noreferrer"
            target="blank"
            href="https://www.linkedin.com/in/murad-hossain-723242215"
          >
            <img src={linkedIn} alt="" />
          </a>
        </Grid>
        <Grid>
          <a
            className="link"
            rel="noreferrer"
            target="blank"
            href="https://twitter.com/Muradmt201"
          >
            <img src={twitter} alt="" />
          </a>
        </Grid>
        <Grid>
          <a
            className="link"
            rel="noreferrer"
            target="blank"
            href="https://github.com/ano201"
          >
            <img src={github} alt="" />
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RightAside;
