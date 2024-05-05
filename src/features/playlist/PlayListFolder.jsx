import {
  HiFolder,
  HiFolderOpen,
  HiOutlineFolder,
  HiPencil,
  HiTrash,
} from "react-icons/hi";
import styled from "@emotion/styled";
import { Tooltip } from "react-tooltip";
import CreatePlaylistForm from "./CreatePlaylistForm";
import Modal from "../../ui/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePlaylist } from "../Song/songSlice";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

const H3 = styled.h3`
  font-size: 1.5rem;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem 1rem 2rem;
  width: 60%;
`;

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin: 1rem;
  background-color: #cbcbcb79;
  cursor: pointer;
`;

function PlayListFolder({ playlist }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleModal = () => setShowModal((prev) => !prev);

  const handleDeletePlaylist = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this playlist?"
    );
    if (!confirmed) {
      return;
    }
    dispatch(deletePlaylist({ id: playlist.id }));

    toast.success("Playlist deleted successfully");
  };

  const handleOpenPlaylist = () => {
    navigate(`/playlists/${playlist.id}`);
  };

  return (
    <CardContainer>
      <HiFolder size={100} onClick={handleOpenPlaylist} />
      <H3>{playlist.name}</H3>
      <ButtonContainer>
        <HiPencil
          onClick={toggleModal}
          size={20}
          cursor="pointer"
          color="Green"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Edit Playlist"
          data-tooltip-place="bottom"
          style={{ outline: "none" }}
        />
        <Tooltip id="my-tooltip" />
        <HiTrash
          size={20}
          cursor="pointer"
          onClick={handleDeletePlaylist}
          data-tooltip-id="my-tooltip4"
          data-tooltip-content="Delete Song"
          data-tooltip-place="bottom"
          style={{ outline: "none" }}
        />
        <Tooltip id="my-tooltip4" />
      </ButtonContainer>
      <Modal isOpen={showModal} onClose={toggleModal}>
        <CreatePlaylistForm
          toggleModal={toggleModal}
          showModal={showModal}
          playlist={playlist}
          isEditing={true}
        />
      </Modal>
    </CardContainer>
  );
}

export default PlayListFolder;
