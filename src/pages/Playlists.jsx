import { useState } from "react";
import CreatePlaylistForm from "../features/playlist/CreatePlaylistForm";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import Row from "../ui/Row";
import PlaylistContainer from "../features/playlist/PlaylistContainer";
import { useSelector } from "react-redux";
import PlaylistSongs from "./PlaylistSongs";

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
      <Button onClick={toggleModal}>Add Playlist</Button>
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
