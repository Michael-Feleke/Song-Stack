import { useState } from "react";
import styled from "@emotion/styled";
import Button from "../../ui/Button";
import { HiPencil, HiTrash } from "react-icons/hi";
import { HiPlayCircle } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { deleteSong } from "./songSlice";
import Modal from "../../ui/Modal";
import CreateSongForm from "./CreateSongForm";
import Spinnermini from "../../ui/Spinnermini";
import toast from "react-hot-toast";

const CardBox = styled.div`
  width: 80%;
  margin: 0 auto;
  border-radius: 0.75rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`;

const Img = styled.img`
  width: 100%;
  transition: 0.5s ease;
  opacity: 0.7;
  &:hover {
    transform: scale(1.1);
  }
`;

const cardLayerStyles = (props) => ({
  width: "100%",
  position: "absolute",
  bottom: 0,
  left: 0,
  transform: `translateY(${props.hovered ? "0" : "100%"})`,
  display: "flex",
  flexDirection: "column",
  padding: "0 4rem",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  background:
    "linear-gradient(to top, rgba(0, 0, 0, 0.5), var(--color-grey-700))",
  transition: "transform 0.5s ease",
});

const CardLayer = styled.div(cardLayerStyles);

const CardDetail = styled.div`
  position: relative;
  overflow: hidden;
  border-top-right-radius: 0.75rem;
  border-top-left-radius: 0.75rem;
`;

const Name = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  margin-top: 1rem;
`;

const Detail = styled.p`
  font-size: 1.2rem;
  margin: 0.3rem 0 1rem;
  color: white;
  width: 200px;
`;

const Span = styled.span`
  color: orange;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem 2rem;
  width: 100%;
`;

function SongCard({ song }) {
  const [isHovered, setIsHovered] = useState(false);
  const { id, title, releasedDate, artist, album, composer, genere } = song;
  const [deleteIndex, setDeleteIndex] = useState("");

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);

  const status = useSelector((state) => state.songs.status);

  const dispatch = useDispatch();

  if (!song) {
    return null;
  }

  const handleDeleteSong = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this song?"
    );
    if (!confirmed) {
      return;
    }
    setDeleteIndex(id);
    dispatch(deleteSong(id));
    status === "succeeded" && toast.success("Song deleted successfully");
  };

  return (
    <CardBox>
      <CardDetail
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Img src="logo-light.png" />
        <CardLayer hovered={isHovered}>
          <Detail>
            <Span>Artist:</Span> {artist}
          </Detail>
          <Detail>
            <Span>Album:</Span> {album}
          </Detail>
          <Detail>
            <Span>Genere:</Span> {genere}
          </Detail>
          <Detail>
            <Span>Composer:</Span> {composer}
          </Detail>
          <Detail>
            <Span>Released Date: </Span> {releasedDate}
          </Detail>
        </CardLayer>
      </CardDetail>
      <Name>{title}</Name>
      <ButtonContainer>
        <Button onClick={toggleModal} variation="secondary" size="small">
          <HiPencil /> Edit
        </Button>
        <HiPlayCircle size={30} />
        {status == "loading" && deleteIndex == id ? (
          <Button
            disabled
            style={{ opacity: "0.5" }}
            variation="danger"
            size="small"
          >
            <Spinnermini /> Deleteing
          </Button>
        ) : (
          <Button onClick={handleDeleteSong} variation="danger" size="small">
            <HiTrash /> Delete
          </Button>
        )}
      </ButtonContainer>
      <Modal isOpen={showModal} onClose={toggleModal}>
        <CreateSongForm
          toggleModal={toggleModal}
          showModal={showModal}
          song={song}
          isEditing={true}
        />
      </Modal>
    </CardBox>
  );
}

export default SongCard;
