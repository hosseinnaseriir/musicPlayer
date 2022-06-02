import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
import Layout from "./components/Layout";
import musics from "./data/util";
import { Routes, Route } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import AboutScreen from "./screens/AboutUs";
import { handleNextMusic } from "./utils/handleNextMusic";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicsList, setMusicsList] = useState(musics);
  const [currentSong, setCurrentSong] = useState(musicsList[0]);
  const audioRef = useRef(null);

  return (
    <div className="App">
      <audio
        onEnded={() => handleNextMusic(musicsList, currentSong, setCurrentSong)}
        ref={audioRef}
        src={currentSong.audio}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              musicsList={musicsList}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
              audio={audioRef}
            >
              <MainScreen
                audioRef={audioRef}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                setCurrentSong={setCurrentSong}
                musicsList={musicsList}
              />
            </Layout>
          }
        />

        <Route path="/about" element={<AboutScreen />} />
      </Routes>
    </div>
  );
}

export default App;
