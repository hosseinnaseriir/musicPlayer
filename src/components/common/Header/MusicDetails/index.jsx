import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useStyles } from "./../header.styles";
import { Box, ButtonBase, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import MusicTime from "./MusicTime";

function MusicDetails({ audio, isPlaying }) {
  const classes = useStyles();

  return (
    <Box flex="1" className={classes.musicDetails}>
      <Box className={classes.musicTitles}>
        <Typography variant="h3">Behet Ghol Midam</Typography>
        <Typography pt="16px">Mohesn Yeganeh</Typography>
      </Box>
      <Box className={classes.musicProgress}>
        <MusicTime audio={audio} isPlaying={isPlaying} />
        <Box pt={"12px"} className={classes.musicControls}>
          <ButtonBase>
            <ArrowBackIosIcon />
          </ButtonBase>
          <ButtonBase>
            <PlayArrowIcon
              sx={{
                fontSize: "50px!important",
                transform: "translateX(-10%)",
              }}
            />
          </ButtonBase>
          <ButtonBase>
            <ArrowForwardIosIcon />
          </ButtonBase>
        </Box>
      </Box>
    </Box>
  );
}

export default MusicDetails;
