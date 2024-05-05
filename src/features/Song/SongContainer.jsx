import styled from "@emotion/styled";
import SongCard from "./SongCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getSongs } from "./songSlice";
import Spinner from "../../ui/Spinner";

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

  useEffect(() => {
    if (!songs || songs.length === 0) {
      dispatch(getSongs());
    }
  }, [dispatch, songs]);

  return (
    <Container>
      {status === "loading" && <Spinner />}
      {status === "failed" && toast.error(error)}
      {songs.map(
        (song) => song && song.id && <SongCard song={song} key={song.id} />
      )}
    </Container>
  );
}

export default SongContainer;
