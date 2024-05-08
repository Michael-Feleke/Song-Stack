import { useDispatch, useSelector } from "react-redux";
import PlayListFolder from "./PlayListFolder";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import PlayListFolderForModal from "./PlayListFolderForModal";
import Header from "../../ui/Header";
import Heading from "../../ui/Heading";
import { HiFolderAdd, HiXCircle } from "react-icons/hi";
import Modal from "../../ui/Modal";
import CreatePlaylistForm from "./CreatePlaylistForm";
import Button from "../../ui/Button";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  height: 300px;
  overflow-y: scroll;
  gap: 5rem;
  /* position: relative; */
  border-radius: 2rem;
  box-shadow: 0 0 1rem var(--bg-color);
  padding: 2rem 0;

  @media (max-width: 540px) {
    width: 300px;
  }
`;

const CloseContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 1rem;
  cursor: pointer;
`;
const ButtonContainer = styled.div`
  text-align: center;
  margin: 3rem 0 1rem;
`;

const Span = styled.span`
  display: flex;
  justify-content: center;
`;

function PlaylistContainerForModal({ toggleModal, song }) {
  const { playlists } = useSelector((state) => state.songs);
  const [showModal, setShowModal] = useState(false);

  const toggleModalToCreate = () => setShowModal((prev) => !prev);

  const noPlaylistFound = Object.keys(playlists).length == 0;

  return (
    <>
      <CloseContainer>
        <HiXCircle onClick={toggleModal} color="red" size={30} />
      </CloseContainer>
      <Heading style={{ textAlign: "center" }} as="h3">
        {noPlaylistFound
          ? "Start by creating new playlist"
          : "Choose from your playlist"}
      </Heading>
      {noPlaylistFound ? (
        <>
          <ButtonContainer>
            <Span>
              <Button onClick={toggleModalToCreate}>
                <HiFolderAdd />
                Add playlist
              </Button>
            </Span>
          </ButtonContainer>
          <Modal isOpen={showModal} onClose={toggleModalToCreate}>
            <CreatePlaylistForm
              toggleModal={toggleModalToCreate}
              showModal={showModal}
            />
          </Modal>
        </>
      ) : (
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
      )}
    </>
  );
}

export default PlaylistContainerForModal;
