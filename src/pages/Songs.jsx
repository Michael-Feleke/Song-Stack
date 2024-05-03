import { useState } from "react";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import SongContainer from "../features/Song/SongContainer";
import Button from "../ui/Button";
import Modal from "../ui/Modal"; // Import your Modal component

import styled from "@emotion/styled";
import { HiMusicalNote } from "react-icons/hi2";
import CreateSongForm from "../features/Song/CreateSongForm";

const ButtonContainer = styled.div`
  text-align: center;
  margin: 3rem 0 1rem;
`;

function Songs() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);

  return (
    <>
      <Row type="Horizontal">
        <Heading as="h1">All Songs</Heading>
      </Row>
      <ButtonContainer>
        <Button onClick={toggleModal}>
          <HiMusicalNote /> Add New Song
        </Button>
      </ButtonContainer>
      <Modal isOpen={showModal} onClose={toggleModal}>
        {/* Pass CreateSongForm to Modal */}
        <CreateSongForm />
      </Modal>
      <Row>
        <SongContainer />
      </Row>
    </>
  );
}

export default Songs;
