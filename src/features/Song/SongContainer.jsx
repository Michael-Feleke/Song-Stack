import styled from "@emotion/styled";
import SongCard from "./SongCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "./songSlice";

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
  const { songs, status, error } = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  return (
    <Container>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>{error}</p>}
      {songs.map(
        (song) => song && song.id && <SongCard song={song} key={song.id} />
      )}
    </Container>
  );
}

export default SongContainer;
