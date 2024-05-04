import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import SongCard from "../features/Song/SongCard";

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

function Favorites() {
  const { songs, favorites } = useSelector((state) => state.songs);

  return (
    <Container>
      {Object.keys(favorites).length === 0 && <p>No favorites yet!</p>}
      {songs
        .filter((song) => favorites[song.id])
        .map(
          (song) =>
            song &&
            song.id && <SongCard song={song} key={song.id} isFavorite={true} />
        )}
    </Container>
  );
}

export default Favorites;
