import { useDispatch, useSelector } from "react-redux";
import PlayListFolder from "./PlayListFolder";
import styled from "@emotion/styled";
import { useEffect } from "react";
import PlayListFolderForModal from "./PlayListFolderForModal";
import Header from "../../ui/Header";
import Heading from "../../ui/Heading";
import { HiXCircle } from "react-icons/hi";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  height: 500px;
  overflow-y: scroll;
  gap: 7rem;
  position: relative;
  border-radius: 2rem;
  box-shadow: 0 0 1rem var(--bg-color);
  padding: 2rem 0;
`;
const CloseContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 1rem;
  cursor: pointer;
`;

function PlaylistContainerForModal({ toggleModal, showModal, song }) {
  const { playlists } = useSelector((state) => state.songs);

  return (
    <>
      <CloseContainer>
        <HiXCircle onClick={toggleModal} size={30} />
      </CloseContainer>
      <Heading style={{ textAlign: "center" }} as="h3">
        Choose from your playlist
      </Heading>
      <Container>
        {playlists &&
          playlists.map((playlist) => (
            <PlayListFolderForModal
              key={playlist.id}
              playlist={playlist}
              song={song}
              toggleModal={toggleModal}
            ></PlayListFolderForModal>
          ))}
      </Container>
    </>
  );
}

export default PlaylistContainerForModal;
