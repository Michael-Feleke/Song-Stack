import { HiFolder } from "react-icons/hi";
import styled from "@emotion/styled";
import { addSongToPlaylist } from "../Song/songSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const H3 = styled.h3`
  font-size: 1.5rem;
  text-align: center;
`;

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin: 1rem;
  background-color: #cbcbcb79;
  cursor: pointer;
`;

function PlayListFolderForModal({ playlist, song, toggleModal }) {
  const dispatch = useDispatch();
  const handleAddToPlaylist = () => {
    dispatch(addSongToPlaylist({ playlistId: playlist.id, songId: song.id }));
    toast.success("Song added to playlist");
    toggleModal();
  };

  return (
    <CardContainer onClick={handleAddToPlaylist}>
      <HiFolder size={50} cursor="pointer" />
      <H3>{playlist.name}</H3>
    </CardContainer>
  );
}

export default PlayListFolderForModal;
