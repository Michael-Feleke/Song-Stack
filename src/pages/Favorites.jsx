import styled from "@emotion/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import SongCard from "../features/Song/SongCard";
import { getSongs } from "../features/Song/songSlice";
import Message from "../ui/Message";
import Heading from "../ui/Heading";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 7rem;
  grid-row-gap: 5rem;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0 0 1rem var(--bg-color);
  padding: 2rem 0;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3rem;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 5rem;
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3rem;
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
  }
`;

function Favorites() {
  const { songs, favorites } = useSelector((state) => state.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  return (
    <>
      <Heading as="h1">
        {Object.keys(favorites).length == 0
          ? "No favoites yet"
          : "Your Favorites"}
      </Heading>
      <Container>
        {songs
          .filter((song) => favorites[song.id])
          .map(
            (song) =>
              song &&
              song.id && (
                <SongCard song={song} key={song.id} isFavorite={true} />
              )
          )}
      </Container>
    </>
  );
}

export default Favorites;
