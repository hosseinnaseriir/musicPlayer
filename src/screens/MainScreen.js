import Main from "./../components/Main/index";

const MainScreen = ({
  musicsList,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
}) => {
  return (
    <Main
      audioRef={audioRef}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      setCurrentSong={setCurrentSong}
      musicsList={musicsList}
    />
  );
};

export default MainScreen;
