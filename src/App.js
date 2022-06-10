import React, {
  useContext,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useState,
} from "react";
import { Button } from "@mui/material";
import Layout from "./components/Layout";
import musics from "./data/util";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import MainScreen from "./screens/MainScreen";
import AboutScreen from "./screens/AboutUs";
import { handleNextMusic } from "./utils/handleNextMusic";
import { contexts } from "./contexts";
import LoginScreen from "./screens/Login";
import Modal from "./components/Modal/index";
import MusicScreen from "./screens/MusicScreen";
import { useLayoutEffect } from "react";

function App() {
  // Consumer
  const { currentSong, musicsList, audioRef, setCurrentSong } =
    useContext(contexts);
  const btn = useRef(null);

  const modalRef = useRef(null);
  useLayoutEffect(() => {
    console.log("useLayoutEffect RUNS");
    btn.current.style.marginTop = "2rem";
  }, []);

  const [count, setCount] = useState(0);
  const [showMemoData, setShowMemoData] = useState(false);

  const memoizedData = useMemo(() => <h1>{count}</h1>, [showMemoData]);
  // const memoizedData = useCallback(() => console.log(count), [showMemoData]);
  return (
    <div className="App">
      {memoizedData}
      <br />
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>increse</button>
      <button onClick={() => setCount((prev) => prev + 100)}>
        increse + 100
      </button>
      <br />
      <button onClick={() => setShowMemoData(!showMemoData)}>
        getMemoize Data
      </button>

      <button onClick={memoizedData}>log data</button>

      <br />
      <button
        ref={btn}
        onClick={() => modalRef.current.setShow(!modalRef.current.show)}
      >
        toggle modal
      </button>
      <Modal ref={modalRef} test="1000" />
      <audio
        onEnded={() => handleNextMusic(musicsList, currentSong, setCurrentSong)}
        ref={audioRef}
        src={currentSong.audio}
      />
      <Layout>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/music/:musicNormalName" element={<MusicScreen />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
