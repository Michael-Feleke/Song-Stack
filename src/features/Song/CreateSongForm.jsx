import styled from "@emotion/styled";
import { useState } from "react";
import Button from "../../ui/Button";
import { HiMusicalNote } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { postSong, updateSong } from "./songSlice";
import Spinnermini from "../../ui/Spinnermini";
import { HiXCircle } from "react-icons/hi";
import toast from "react-hot-toast";

const FormContainer = styled.form`
  display: flex;
  padding: 0 10rem 0 2rem;
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

function CreateSongForm({
  song = null,
  isEditing = false,
  toggleModal,
  showModal,
}) {
  const id = isEditing ? song.id : null;
  const [title, setTitle] = useState(isEditing ? song.title : "");
  const [artist, setArtist] = useState(isEditing ? song.artist : "");
  const [genere, setGenere] = useState(isEditing ? song.genere : "");
  const [album, setAlbum] = useState(isEditing ? song.album : "");
  const [composer, setComposer] = useState(isEditing ? song.composer : "");
  const [releasedDate, setReleasedDate] = useState(
    isEditing ? song.releasedDate : ""
  );

  const status = useSelector((state) => state.songs.status);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const song = {
      id,
      title,
      artist: artist == "" ? "UNKNOWN" : artist,
      genere: genere == "" ? "UNKNOWN" : genere,
      album: album == "" ? "UNKNOWN" : album,
      composer: composer == "" ? "UNKNOWN" : composer,
      releasedDate: releasedDate == "" ? "UNKNOWN" : releasedDate,
      image: "logo-light.png",
    };

    isEditing ? dispatch(updateSong(song)) : dispatch(postSong(song));
    status === "succeeded" &&
      toast.success(
        ` ${
          isEditing ? "Song updated successfully" : " Song created successfully"
        }`
      );
    toggleModal();
  };

  const handleClose = () => {
    toggleModal((showModal) => !showModal);
  };

  return (
    <>
      <CloseContainer>
        <HiXCircle onClick={handleClose} size={30} />
      </CloseContainer>
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          <InputLabel>Title</InputLabel>
          <InputField
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>Artist</InputLabel>
          <InputField
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            placeholder="Enter artist"
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>Genre</InputLabel>
          <InputField
            type="text"
            value={genere}
            onChange={(e) => setGenere(e.target.value)}
            placeholder="Enter genre"
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>Album</InputLabel>
          <InputField
            type="text"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            placeholder="Enter album"
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>Composer</InputLabel>
          <InputField
            type="text"
            value={composer}
            onChange={(e) => setComposer(e.target.value)}
            placeholder="Enter composer"
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>Released Date</InputLabel>
          <InputField
            type="date"
            value={releasedDate}
            onChange={(e) => setReleasedDate(e.target.value)}
            placeholder="Enter released date"
          />
        </InputContainer>
        {status === "loading" ? (
          <Button disabled style={{ opacity: "0.5" }}>
            <Spinnermini /> {isEditing ? "Updating" : "Creating"}
          </Button>
        ) : (
          <Button type="submit" style={{ marginTop: "1rem" }}>
            <HiMusicalNote /> {isEditing ? "Edit" : "Create"} Song
          </Button>
        )}
      </FormContainer>
    </>
  );
}

export default CreateSongForm;
