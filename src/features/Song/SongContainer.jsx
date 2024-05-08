import styled from "@emotion/styled";
import SongCard from "./SongCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getSongs } from "./songSlice";
import Spinner from "../../ui/Spinner";
import Heading from "../../ui/Heading";

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
`;

function SongContainer() {
  const { songs, status, error } = useSelector((state) => state.songs);
  const dispatch = useDispatch();
  const sortedSongs = songs.slice().sort((a, b) => a.id - b.id);

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  return (
    <Container>
      {status === "loading" && <Spinner />}
      {status === "failed" && toast.error(error)}
      {!error ? (
        sortedSongs.map(
          (song) => song && song.id && <SongCard song={song} key={song.id} />
        )
      ) : (
        <Heading as="h2">Check your connection!</Heading>
      )}
    </Container>
  );
}

export default SongContainer;
