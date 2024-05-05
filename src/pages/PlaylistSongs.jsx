import { useEffect } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowLeftCircle } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getSongs } from "../features/Song/songSlice";
import SongCard from "../features/Song/SongCard";
import styled from "@emotion/styled";

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

function PlaylistSongs() {
  const { id } = useParams();
  const navigate = useNavigate();

  const songs = useSelector((state) => state.songs.songs);
  const playlist = useSelector((state) =>
    state.songs.playlists.find((playlist) => playlist.id === id)
  );
  const songsInPlaylist = playlist?.songs;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!songs || songs.length === 0) {
      dispatch(getSongs());
    }
  }, [dispatch, songs]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <HiArrowLeftCircle size={30} cursor="pointer" onClick={handleGoBack}>
        Go Back
      </HiArrowLeftCircle>
      <Container>
        {songsInPlaylist?.map(
          (song) => song && song.id && <SongCard song={song} key={song.id} />
        )}
      </Container>
    </div>
  );
}

export default PlaylistSongs;
