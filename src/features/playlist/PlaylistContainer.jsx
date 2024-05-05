import { useSelector } from "react-redux";
import PlayListFolder from "./PlayListFolder";
import styled from "@emotion/styled";

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
`;

function PlaylistContainer() {
  const { playlists } = useSelector((state) => state.songs);
  console.log(playlists);

  return (
    <Container>
      {playlists &&
        playlists.map((playlist) => (
          <PlayListFolder
            key={playlist.id}
            playlist={playlist}
          ></PlayListFolder>
        ))}
    </Container>
  );
}

export default PlaylistContainer;
