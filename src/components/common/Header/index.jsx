import React, { useContext, useEffect, useState } from "react";
import { Box, ButtonBase, Typography } from "@mui/material";
import { Container } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseTwoToneIcon from "@mui/icons-material/PauseTwoTone";
import mohsen from "./../../../assets/images/mosen.png";
import logo from "./../../../assets/images/Logo.png";
import MusicDetails from "./MusicDetails";
import { useStyles } from "./header.styles";
import { contexts } from "./../../../contexts/index";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const {
    currentSong,
    audioRef: audio,
    isPlaying,
    setIsPlaying,
    setCurrentSong,
    musicsList,
  } = useContext(contexts);
  const classes = useStyles();

  const handlePlayMusic = () => {
    const playMusic = audio.current.play();
    playMusic.then(() => setIsPlaying(true));
  };

  const handlePauseMusic = () => {
    audio.current.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    handlePlayMusic();
  }, [currentSong]);

  

  return (
    <Box className={classes.root} component="header">
      <Container maxWidth={false} sx={{ padding: "0 24px" }}>
        <Box py="50px" display="flex" className={classes.headerItems}>
          <Box
            sx={{
              backgroundImage: `url(${currentSong.cover}), linear-gradient(100.41deg, rgba(14, 99, 44, 0.15) 8.55%, rgba(32, 32, 32, 0.15) 93.44%)`,
            }}
            className={classes.musicCover}
          >
            {isPlaying ? (
              <ButtonBase onClick={handlePauseMusic}>
                <PauseTwoToneIcon color="primary" />
              </ButtonBase>
            ) : (
              <ButtonBase onClick={handlePlayMusic}>
                <PlayArrowIcon color="primary" />
              </ButtonBase>
            )}
          </Box>
          <MusicDetails
            handlePauseMusic={handlePauseMusic}
            currentSong={currentSong}
            isPlaying={isPlaying}
            audio={audio}
            setCurrentSong={setCurrentSong}
            musicsList={musicsList}
            handlePlayMusic={handlePlayMusic}
          />
          <Box
            alignSelf="flex-start"
            width={100}
            component="img"
            src={logo}
            className={classes.mainLogo}
          ></Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
