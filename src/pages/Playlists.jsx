import { useState } from "react";
import CreatePlaylistForm from "../features/playlist/CreatePlaylistForm";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Row from "../ui/Row";
import PlaylistContainer from "../features/playlist/PlaylistContainer";
import { useSelector } from "react-redux";
import PlaylistSongs from "./PlaylistSongs";
import Heading from "../ui/Heading";
import styled from "@emotion/styled";
import { HiFolderAdd } from "react-icons/hi";

const Span = styled.span`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin: 3rem 0 1rem;
`;

function Playlists() {
  const [showModal, setShowModal] = useState(false);
  const [showSongs, setShowSongs] = useState(false);
  const [playlistId, setPlaylistId] = useState(-1);
  const toggleModal = () => setShowModal((prev) => !prev);

  const { playlists } = useSelector((state) => state.songs);

  return showSongs ? (
    <PlaylistSongs id={playlistId} />
  ) : (
    <>
      <Heading as="h1">
        {Object.keys(playlists).length == 0
          ? "No playlist yet"
          : "Your Playlists"}
      </Heading>
      <ButtonContainer>
        <Span>
          <Button onClick={toggleModal}>
            <HiFolderAdd />
            Add playlist
          </Button>
        </Span>
      </ButtonContainer>
      <Modal isOpen={showModal} onClose={toggleModal}>
        <CreatePlaylistForm toggleModal={toggleModal} showModal={showModal} />
      </Modal>
      <Row>
        <PlaylistContainer
          playlists={playlists}
          setShowSongs={setShowSongs}
          setPlaylistId={setPlaylistId}
        />
      </Row>
    </>
  );
}

export default Playlists;
