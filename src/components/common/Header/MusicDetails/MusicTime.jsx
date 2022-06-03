import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStyles } from "../header.styles";

function MusicTime({ audio, isPlaying }) {
  const classes = useStyles();

  const [songCurrentTime, setSongCurrentTime] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      setInterval(() => {
        setSongCurrentTime(audio?.current?.currentTime);
      }, 1000);
    }
  }, [isPlaying]);
  return (
    <>
      <Box
        px={1}
        display="flex"
        justifyContent="space-between"
        className={classes.musicTime}
      >
        <Typography>
          {("0" + Math.floor(songCurrentTime / 60)).slice(-2)} :{" "}
          {("0" + Math.floor(audio.current?.currentTime % 60 || 0)).slice(-2)}
        </Typography>
        <Typography>
          {Math.floor(audio.current?.duration / 60) || "00"} :{" "}
          {Math.floor(audio.current?.duration % 60) || "00"}
        </Typography>
      </Box>
      <Box className={classes.musicProgressMain}>
        <input
          value={audio.current?.currentTime}
          type="range"
          min={0}
          max={audio.current?.duration || 0}
          onChange={(e) => {
            audio.current.currentTime = e.target.value;
            setSongCurrentTime(e.target.value);
          }}
        />
        <Box
          sx={{
            width: `${(songCurrentTime / audio.current?.duration) * 100}%`,
          }}
          className={classes.musicProgressBar}
        ></Box>
      </Box>
    </>
  );
}

export default MusicTime;
