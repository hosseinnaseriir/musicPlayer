import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useStyles } from "./../header.styles";
import { Box, ButtonBase, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseTwoToneIcon from "@mui/icons-material/PauseTwoTone";
import MusicTime from "./MusicTime";

function MusicDetails({
  audio,
  isPlaying,
  currentSong,
  setCurrentSong,
  musicsList,
  handlePlayMusic,
  handlePauseMusic,
}) {
  const classes = useStyles();

  const handleNextMusic = () => {
    const currentMusicIndex = musicsList.findIndex(
      (song) => song === currentSong
    );
    console.log(currentMusicIndex);
    if (currentMusicIndex === musicsList.length - 1) {
      setCurrentSong(musicsList[0]);
    } else {
      setCurrentSong(musicsList[currentMusicIndex + 1]);
    }
  };

  const handlePrevMusic = () => {
    const currentMusicIndex = musicsList.findIndex(
      (song) => song === currentSong
    );
    console.log(currentMusicIndex);
    if (currentMusicIndex === 0) {
      setCurrentSong(musicsList[musicsList.length - 1]);
    } else {
      setCurrentSong(musicsList[currentMusicIndex - 1]);
    }
  };

  return (
    <Box flex="1" className={classes.musicDetails}>
      <Box className={classes.musicTitles}>
        <Typography variant="h3">{currentSong.name}</Typography>
        <Typography pt="16px">{currentSong.artist}</Typography>
      </Box>
      <Box className={classes.musicProgress}>
        <MusicTime audio={audio} isPlaying={isPlaying} />
        <Box pt={"12px"} className={classes.musicControls}>
          <ButtonBase onClick={handlePrevMusic}>
            <ArrowBackIosIcon />
          </ButtonBase>
          {isPlaying ? (
            <ButtonBase onClick={handlePauseMusic}>
              <PauseTwoToneIcon
                sx={{
                  fontSize: "50px!important",
                  transform: "translateX(-10%)",
                }}
                color="primary"
              />
            </ButtonBase>
          ) : (
            <ButtonBase onClick={handlePlayMusic}>
              <PlayArrowIcon
                color="primary"
                sx={{
                  fontSize: "50px!important",
                  transform: "translateX(-10%)",
                }}
              />
            </ButtonBase>
          )}
          <ButtonBase onClick={handleNextMusic}>
            <ArrowForwardIosIcon />
          </ButtonBase>
        </Box>
      </Box>
    </Box>
  );
}

export default MusicDetails;
