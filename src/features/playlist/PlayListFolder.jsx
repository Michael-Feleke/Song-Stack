import {
  HiFolder,
  HiFolderOpen,
  HiOutlineFolder,
  HiPencil,
  HiTrash,
} from "react-icons/hi";
import styled from "@emotion/styled";
import { Tooltip } from "react-tooltip";

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
  return (
    <CardContainer>
      <HiFolder size={100} />
      <H3>{playlist.name}</H3>
      <ButtonContainer>
        <HiPencil
          // onClick={toggleModal}
          size={15}
          cursor="pointer"
          color="Green"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Edit Playlist"
          data-tooltip-place="bottom"
          style={{ outline: "none" }}
        />
        <Tooltip id="my-tooltip" />
        <HiTrash
          size={15}
          cursor="pointer"
          // onClick={handleDeleteSong}
          data-tooltip-id="my-tooltip4"
          data-tooltip-content="Delete Song"
          data-tooltip-place="bottom"
          style={{ outline: "none" }}
        />
        <Tooltip id="my-tooltip4" />
      </ButtonContainer>
    </CardContainer>
  );
}

export default PlayListFolder;
