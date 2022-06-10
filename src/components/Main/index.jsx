import React, { useContext } from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { contexts } from "./../../contexts/index";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const { musicsList, setIsPlaying, setCurrentSong } = useContext(contexts);
  const handleChangeCurrentSong = (music) => {
    setCurrentSong(music);
    setIsPlaying(false);
  };

  return (
    <Box component="ul">
      {musicsList.map((music) => (
        <Box
          onClick={() => {
            handleChangeCurrentSong(music);
            //                     ['khod' , 'khah'] khod_khah
            navigate(`/music/${music.name.split(" ").join("_")}`, {
              state: {
                myName: "HosseinNaseri    " + music.artist,
              },
            });
          }}
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
