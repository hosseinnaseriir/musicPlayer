import { Box, Grid } from "@mui/material";
import React from "react";
import Header from "./../common/Header/index";
import SideBar from "./../common/SideBar/index";

function Layout({ children}) {
  return (
    <>
      <Header/>
      <Grid container>
        <SideBar />
        <Grid item xs={8} component="main">
          {children}
        </Grid>
      </Grid>
    </>
  );
}

export default Layout;
