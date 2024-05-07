import { useState } from "react";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import SongContainer from "../features/Song/SongContainer";
import Button from "../ui/Button";
import Modal from "../ui/Modal"; // Import your Modal component

import styled from "@emotion/styled";
import { HiMusicalNote } from "react-icons/hi2";
import CreateSongForm from "../features/Song/CreateSongForm";
import { useSelector } from "react-redux";

const ButtonContainer = styled.div`
  text-align: center;
  margin: 3rem 0 1rem;
`;

const Span = styled.span`
  display: flex;
  justify-content: center;
`;

function Songs() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);
  const { songs } = useSelector((state) => state.songs);

  return (
    <>
      <Row type="Horizontal">
        <Heading as="h1">
          {Object.keys(songs).length == 0 ? "No songs found" : "All Songs"}
        </Heading>
      </Row>
      <ButtonContainer>
        <Span>
          <Button onClick={toggleModal}>
            <HiMusicalNote /> Add New Song
          </Button>
        </Span>
      </ButtonContainer>
      <Modal isOpen={showModal} onClose={toggleModal}>
        <CreateSongForm
          isEditing={false}
          toggleModal={toggleModal}
          showModal={showModal}
        />
      </Modal>
      <Row>
        <SongContainer />
      </Row>
    </>
  );
}

export default Songs;
