import styled from "@emotion/styled";
import { useState } from "react";
import Button from "../../ui/Button";
import { HiMusicalNote } from "react-icons/hi2";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const InputLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const InputField = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

function CreateSongForm() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <FormContainer>
      <InputContainer>
        <InputLabel>Title</InputLabel>
        <InputField
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Artist</InputLabel>
        <InputField
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Genre</InputLabel>
        <InputField
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </InputContainer>
      <Button onClick={handleSubmit}>
        <HiMusicalNote /> Create Song
      </Button>
    </FormContainer>
  );
}

export default CreateSongForm;
