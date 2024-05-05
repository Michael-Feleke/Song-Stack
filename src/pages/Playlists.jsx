import { useState } from "react";
import CreatePlaylistForm from "../features/playlist/CreatePlaylistForm";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Row from "../ui/Row";
import PlaylistContainer from "../features/playlist/PlaylistContainer";

function Playlists() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <>
      <Button onClick={toggleModal}>Add Playlist</Button>
      <Modal isOpen={showModal} onClose={toggleModal}>
        <CreatePlaylistForm toggleModal={toggleModal} showModal={showModal} />
      </Modal>
      <Row>
        <PlaylistContainer />
      </Row>
    </>
  );
}

export default Playlists;
