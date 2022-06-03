import React, { useContext, useRef, useState } from "react";
import { Button } from "@mui/material";
import Layout from "./components/Layout";
import musics from "./data/util";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import AboutScreen from "./screens/AboutUs";
import { handleNextMusic } from "./utils/handleNextMusic";
import { contexts } from "./contexts";

function App() {
  // Consumer
  const { currentSong, musicsList,audioRef, setCurrentSong } = useContext(contexts);

  return (
    <div className="App">
      <audio
        onEnded={() => handleNextMusic(musicsList, currentSong, setCurrentSong)}
        ref={audioRef}
        src={currentSong.audio}
      />
      <Layout>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
