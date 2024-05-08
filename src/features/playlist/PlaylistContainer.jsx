import { useDispatch, useSelector } from "react-redux";
import PlayListFolder from "./PlayListFolder";
import styled from "@emotion/styled";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7rem;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0 0 1rem var(--bg-color);
  padding: 2rem 0;

  @media (max-width: 490px) {
    justify-content: center;
  }
`;

function PlaylistContainer({ playlists, setShowSongs, setPlaylistId }) {
  return (
    <Container>
      {playlists &&
        playlists.map((playlist) => (
          <PlayListFolder
            key={playlist.id}
            playlist={playlist}
            setPlaylistId={setPlaylistId}
            setShowSongs={setShowSongs}
          ></PlayListFolder>
        ))}
    </Container>
  );
}

export default PlaylistContainer;
