import { useEffect, useState } from "react";
import { HiArrowLeftCircle } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../features/Song/songSlice";
import SongCard from "../features/Song/SongCard";
import styled from "@emotion/styled";
import Playlists from "./Playlists";

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

function PlaylistSongs({ id }) {
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
        color="#27ae60"
      >
        Go Back
      </HiArrowLeftCircle>
      {songsInPlaylist && songsInPlaylist.length > 0 ? (
        <Container>
          {songsInPlaylist.map(
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
      ) : (
        <p>No songs added to this playlist.</p>
      )}
    </div>
  );
}

export default PlaylistSongs;
