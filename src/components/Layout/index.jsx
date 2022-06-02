import { Box, Grid } from "@mui/material";
import React from "react";
import Header from "./../common/Header/index";
import SideBar from "./../common/SideBar/index";
import MainScreen from "./../../screens/MainScreen";

function Layout({
  children,
  audio,
  isPlaying,
  setIsPlaying,
  currentSong,
  setCurrentSong,
  musicsList,
}) {
  return (
    <>
      <Header
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        musicsList={musicsList}
        audio={audio}
      />
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
