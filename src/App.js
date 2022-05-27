import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
import Layout from "./components/Layout";
import musics from "./data/util";

function App() {
  const [musicsList, setMusicsList] = useState(musics);

  console.log(musicsList)

  const audioRef = useRef(null);

  return (
    <div className="App">
      <audio
        ref={audioRef}
        src="https://downloadmusic.gratomic.ir/music/dl/archive/2017/12/12/Mohsen_Yeganeh__-Behet_Ghol_Midam_Gratomic.com.mp3"
      />
      <Layout audio={audioRef}>
        <Button variant="contained">hello </Button>
      </Layout>
    </div>
  );
}

export default App;
