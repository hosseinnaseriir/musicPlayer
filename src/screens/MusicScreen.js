import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { contexts } from "../contexts";

function MusicScreen() {
  const [data, setData] = useState();
  const { musicsList, currentSong, setCurrentSong } = useContext(contexts);
  const location = useLocation();
  const params = useParams();
  useEffect(() => {
    const musicName = params.musicNormalName.split("_").join(" ");
    const music = musicsList.filter((song) => song.name === musicName);
    setData(music[0]);
    setCurrentSong(music[0]);
  }, [params.musicNormalName]);

  return (
    <div>
      MusicScreen {JSON.stringify(data)} <hr /> {location.state.myName}
    </div>
  );
}

export default MusicScreen;
