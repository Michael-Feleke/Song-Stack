import styled from "@emotion/styled";
import Button from "../../ui/Button";
import { useState } from "react";
import { HiFolderAdd, HiPencil, HiXCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { createPlaylist, updatePlaylistName } from "../Song/songSlice";
import toast from "react-hot-toast";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.span`
  display: flex;
  margin-bottom: 1.5rem;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`;

const InputLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const InputField = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #8e44ad;
  }
`;

const CloseContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 1rem;
  cursor: pointer;
`;

function CreatePlaylistForm({
  isEditing = false,
  toggleModal,
  showModal,
  playlist = null,
}) {
  const [playlistName, setPlaylistName] = useState(
    isEditing ? playlist.name : ""
  );
  const playlists = useSelector((state) => state.songs.playlists);
  const dispatch = useDispatch();

  function generateId() {
    return Math.random().toString(36).substr(2, 9);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playlists.some((p) => p.name === playlistName)) {
      toast.error("Playlist already exists");
      return;
    }
    const playlistId = isEditing ? playlist.id : generateId();
    const payload = { id: playlistId, name: playlistName };
    isEditing
      ? dispatch(updatePlaylistName(payload))
      : dispatch(createPlaylist({ ...payload, songs: [] }));
    isEditing
      ? toast.success("Playlist updated successfully")
      : toast.success("Playlist created successfully");
    setPlaylistName("");
    toggleModal();
  };

  return (
    <>
      <CloseContainer>
        <HiXCircle onClick={toggleModal} size={30} color="red" />
      </CloseContainer>
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          <InputLabel htmlFor="playlistName">Playlist Name</InputLabel>
          <InputField
            type="text"
            id="playlistName"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            placeholder="Enter playlist name"
            required
          />
        </InputContainer>
        <Button type="submit">
          {isEditing ? <HiPencil /> : <HiFolderAdd />}
          {isEditing ? "Update Playlist" : "Create Playlist"}
        </Button>
      </FormContainer>
    </>
  );
}

export default CreatePlaylistForm;
