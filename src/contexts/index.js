import { createContext, useRef, useState } from "react";
import musics from "../data/util";

// Store
export const contexts = createContext({
  isPlaying: false,
  setIsPlaying: () => {},
  musicsList: [],
  setMusicsList: () => {},
  currentSong: {},
  setCurrentSong: () => {},
  audioRef: {},
});

// Provider
const ContextsProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicsList, setMusicsList] = useState(musics);
  const [currentSong, setCurrentSong] = useState(musicsList[0]);
  const audioRef = useRef(null);
  return (
    <contexts.Provider
      value={{
        isPlaying: isPlaying,
        setIsPlaying,
        musicsList,
        setMusicsList,
        currentSong,
        audioRef: audioRef,
        setCurrentSong,
      }}
    >
      {children}
    </contexts.Provider>
  );
};

export default ContextsProvider;
