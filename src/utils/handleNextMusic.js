export const handleNextMusic = (musicsList, currentSong, setCurrentSong) => {
  const currentMusicIndex = musicsList.findIndex(
    (song) => song === currentSong
  );
  console.log(currentMusicIndex);
  if (currentMusicIndex === musicsList.length - 1) {
    setCurrentSong(musicsList[0]);
  } else {
    setCurrentSong(musicsList[currentMusicIndex + 1]);
  }
};
