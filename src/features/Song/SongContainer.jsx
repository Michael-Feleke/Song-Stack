import styled from "@emotion/styled";
import SongCard from "./SongCard";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0 0 1rem var(--bg-color);
  padding: 2rem 0;
`;

function SongContainer() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/songs")
      .then((response) => response.json())
      .then((data) => setSongs(data));
  }, []);

  return (
    <Container>
      {songs.map((song) => (
        <SongCard song={song} key={song.songId} />
      ))}
    </Container>
  );
}

export default SongContainer;
