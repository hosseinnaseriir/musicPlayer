import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";

function Main({
  musicsList,
  setIsPlaying,
  isPlaying,
  audioRef,
  setCurrentSong,
}) {
  const handleChangeCurrentSong = (music) => {
    setCurrentSong(music);
    setIsPlaying(false);
  };

  return (
    <Box component="ul">
      {musicsList.map((music) => (
        <Box
          onClick={() => handleChangeCurrentSong(music)}
          key={music.id}
          component="li"
        >
          <Avatar src={music.cover} />
          <Typography>{music.artist}</Typography>
          <Typography>{music.name}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default Main;
