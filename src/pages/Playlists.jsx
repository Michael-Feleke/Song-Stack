import { useState } from "react";
import CreatePlaylistForm from "../features/playlist/CreatePlaylistForm";
import Button from "../ui/Button";
import Modal from "../ui/Modal";

function Playlists() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <>
      <Button onClick={toggleModal}>Add Playlist</Button>
      <Modal isOpen={showModal} onClose={toggleModal}>
        <CreatePlaylistForm toggleModal={toggleModal} showModal={showModal} />
      </Modal>
    </>
  );
}

export default Playlists;
