import { Box, Grid } from "@mui/material";
import React from "react";
import Header from "./../common/Header/index";
import SideBar from "./../common/SideBar/index";
import Main from "./../Main/index";

function Layout({ children, audio }) {
  return (
    <>
      <Header audio={audio} />
      <Grid container>
        <SideBar />
        <Grid item xs={8} component="main">
          <Main />
          {/* {children} */}
        </Grid>
      </Grid>
    </>
  );
}

export default Layout;
