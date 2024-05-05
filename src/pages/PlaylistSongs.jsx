import { useEffect, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { HiArrowLeftCircle } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getSongs } from "../features/Song/songSlice";
import SongCard from "../features/Song/SongCard";
import styled from "@emotion/styled";
import Playlists from "./Playlists";

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

function PlaylistSongs({ id }) {
  // const { id } = useParams();
  const [backtoPlaylists, setBacktoPlaylists] = useState(false);

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

  return backtoPlaylists ? (
    <Playlists />
  ) : (
    <div>
      <HiArrowLeftCircle
        size={30}
        cursor="pointer"
        onClick={() => setBacktoPlaylists((cur) => !cur)}
      >
        Go Back
      </HiArrowLeftCircle>
      <Container>
        {songsInPlaylist?.map(
          (song) =>
            song &&
            song.id && (
              <SongCard
                song={song}
                key={song.id}
                isInPlaylist={true}
                playlist={playlist}
              />
            )
        )}
      </Container>
    </div>
  );
}

export default PlaylistSongs;
