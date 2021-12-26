import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const SingleProject = (props) => {
  const {
    name,
    about,
    adminWork,
    userWork,
    authentication,
    database,
    hostingDatabase,
    live,
    payment,
    responsive,
    routing,
    sourceCode,
    serverCode,
  } = props.project.data;
  const image = props.project.image;
  const style = { marginTop: "1rem" };
  return (
    <Box sx={{ flexGrow: 1, mt: "5rem", boxShadow: 3 }}>
      <Grid container sx={{ display: "flex", alignItems: "center" }}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <a rel="noreferrer" target="_blank" className="link" href={live}>
            <img src={`data:image/png;base64,${image.img} `} alt="" />
          </a>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Grid sx={{ ml: { xs: 0, sm: 0, md: 2, lg: 2, xl: 2 } }}>
            <Typography
              variant="h4"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: { xs: "center", sm: "center", md: "left" },
                mt: { xs: "2rem", sm: "2rem", md: 1, lg: 1, xl: 1 },
              }}
              className="neon-text"
            >
              {name}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: { xs: "center", sm: "center", md: "left" },
              }}
              className="light-text"
            >
              <ul>
                <li>{about}</li>
                <li>{userWork}</li>
                <li>{adminWork}</li>
                {payment.length > 3 && <li>{payment}</li>}
                <li>{authentication}</li>
                <li>{routing}</li>
                <li>{responsive}</li>
                <li>{database}</li>
                <li>{hostingDatabase}</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          sx={{
            my: 2,
            display: "flex",
            justifyContent: "space-evenly",
            width: 1,
            flexWrap: {
              xs: "wrap",
              sm: "wrap",
              md: "nowrap",
              lg: "nowrap",
              xl: "nowrap",
            },
          }}
        >
          <a rel="noreferrer" style={style} target="_blank" href={live}>
            <button className="hovered-btn">See Live</button>
          </a>
          <a rel="noreferrer" style={style} target="_blank" href={sourceCode}>
            <button className="hovered-btn">Source Code</button>
          </a>
          <a rel="noreferrer" style={style} target="_blank" href={serverCode}>
            <button className="hovered-btn">Server Code</button>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SingleProject;
