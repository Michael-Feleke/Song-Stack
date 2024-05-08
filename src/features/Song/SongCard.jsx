import { useState } from "react";
import styled from "@emotion/styled";
import Button from "../../ui/Button";
import {
  HiHeart,
  HiOutlineHeart,
  HiPencil,
  HiPlusCircle,
  HiTrash,
} from "react-icons/hi";
import { HiPlayCircle } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSong,
  removeSongFromPlaylist,
  toggleFavorite,
} from "./songSlice";
import Modal from "../../ui/Modal";
import CreateSongForm from "./CreateSongForm";
import Spinnermini from "../../ui/Spinnermini";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import PlaylistContainerForModal from "../playlist/PlaylistContainerForModal";

const CardBox = styled.div`
  width: 90%;
  margin: 0 auto;
  border-radius: 0.75rem;
  box-shadow: 0 0 1rem var(--color-grey-300);
  @media (max-width: 1050px) {
    width: 100%;
  }
  @media (max-width: 900px) {
    width: 85%;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
  @media (max-width: 750px) {
    width: 85%;
  }
  @media (max-width: 500px) {
    width: 50%;
  }
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
  background: "#18212f",
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
  font-weight: 600;
  text-align: center;
  margin-top: 2rem;
  text-transform: capitalize;
  letter-spacing: 1px;
`;

const Detail = styled.p`
  font-size: 1.2rem;
  margin: 0.3rem 0 1rem;
  color: #f3f4f6;
  width: 200px;

  @media (max-width: 1150px) {
    font-size: 1rem;
  }
`;

const Span = styled.span`
  color: var(--color-brand-600);
  font-size: 1.5rem;
  @media (max-width: 1150px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem 1rem 2rem;
  margin-top: 2rem;
  width: 100%;
  border-top: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-200);
`;

function SongCard({
  song,
  isFavorite = false,
  isInPlaylist = false,
  playlist,
}) {
  const { status, favorites } = useSelector((state) => state.songs);
  const { id, title, releasedDate, artist, album, composer, genere } = song;
  const [isHovered, setIsHovered] = useState(false);

  const isSongFavorite = favorites[id];

  const [isHeartClicked, setIsHeartClicked] = useState(isSongFavorite);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);
  const [showModal2, setShowModal2] = useState(false);

  const toggleModal2 = () => setShowModal2((prev) => !prev);

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
    dispatch(deleteSong(id));
    status === "loading" && toast.loading("Deleting song...");
    status === "succeeded" && toast.success("Song deleted successfully");
    status === "failed" && toast.error("Failed to delete song");
  };

  const handleHeart = () => {
    setIsHeartClicked((cur) => !cur);
    dispatch(toggleFavorite({ songId: id }));
    isSongFavorite
      ? toast.success("Removed from favorites")
      : toast.success("Added to favorites");
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
            <Span>Artist :</Span> {artist}
          </Detail>
          <Detail>
            <Span>Album :</Span> {album}
          </Detail>
          <Detail>
            <Span>Genre :</Span> {genere}
          </Detail>
          <Detail>
            <Span>Composer :</Span> {composer}
          </Detail>
          <Detail>
            <Span>Released Date : </Span> {releasedDate}
          </Detail>
        </CardLayer>
      </CardDetail>
      <Name>{title}</Name>
      <ButtonContainer>
        <HiPencil
          onClick={toggleModal}
          size={25}
          cursor="pointer"
          color="#27ae60"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Edit Song"
          data-tooltip-place="bottom"
          style={{ outline: "none" }}
        />
        <Tooltip id="my-tooltip" />

        {isFavorite ? (
          <HiHeart size={25} color="red" />
        ) : isHeartClicked ? (
          <>
            <HiHeart
              onClick={handleHeart}
              cursor="pointer"
              size={25}
              color="red"
              data-tooltip-id="my-tooltip1"
              data-tooltip-content="Remove from favorites"
              data-tooltip-place="bottom"
              style={{ outline: "none" }}
            />
            <Tooltip id="my-tooltip1" />
          </>
        ) : (
          <>
            <HiOutlineHeart
              onClick={handleHeart}
              cursor="pointer"
              size={25}
              color="red"
              data-tooltip-id="my-tooltip2"
              data-tooltip-content="Add to favorites"
              data-tooltip-place="bottom"
              style={{ outline: "none" }}
            />
            <Tooltip id="my-tooltip2" />
          </>
        )}
        {isFavorite ? (
          <>
            <HiPlusCircle
              color="var(--color-grey-900)"
              size={25}
              cursor="pointer"
              onClick={toggleModal2}
              data-tooltip-id="my-tooltip5"
              data-tooltip-content="Add to playlist"
              data-tooltip-place="bottom"
              style={{ outline: "none" }}
            />
            <HiTrash
              color="var(--color-grey-900)"
              size={25}
              cursor="pointer"
              onClick={() => dispatch(toggleFavorite({ songId: id }))}
              data-tooltip-id="my-tooltip3"
              data-tooltip-content="Remove from favorites"
              data-tooltip-place="bottom"
              style={{ outline: "none" }}
            />
            <Tooltip id="my-tooltip3" />
          </>
        ) : isInPlaylist ? (
          <>
            <HiTrash
              color="var(--color-grey-900)"
              size={25}
              cursor="pointer"
              onClick={() =>
                dispatch(
                  removeSongFromPlaylist({
                    songId: id,
                    playlistId: playlist.id,
                  })
                )
              }
              data-tooltip-id="my-tooltip3"
              data-tooltip-content="Remove from playlist"
              data-tooltip-place="bottom"
              style={{ outline: "none" }}
            />
            <Tooltip id="my-tooltip3" />
          </>
        ) : (
          <>
            <HiPlusCircle
              color="var(--color-grey-900)"
              size={25}
              cursor="pointer"
              onClick={toggleModal2}
              data-tooltip-id="my-tooltip5"
              data-tooltip-content="Add to playlist"
              data-tooltip-place="bottom"
              style={{ outline: "none" }}
            />
            <Tooltip id="my-tooltip5" />
            <HiTrash
              color="var(--color-grey-900)"
              size={25}
              cursor="pointer"
              onClick={handleDeleteSong}
              data-tooltip-id="my-tooltip4"
              data-tooltip-content="Delete Song"
              data-tooltip-place="bottom"
              style={{ outline: "none" }}
            />
            <Tooltip id="my-tooltip4" />
          </>
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
      <Modal isOpen={showModal2} onClose={toggleModal2}>
        <PlaylistContainerForModal
          toggleModal={toggleModal2}
          showModal={showModal}
          song={song}
        />
      </Modal>
    </CardBox>
  );
}

export default SongCard;
