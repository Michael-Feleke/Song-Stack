import Row from "../ui/Row";
import Heading from "../ui/Heading";
import SongContainer from "../features/SongContainer";
import Button from "../ui/Button";

import styled from "@emotion/styled";
import { HiMusicalNote } from "react-icons/hi2";

const ButtonContainer = styled.div`
  text-align: center;
  margin: 3rem 0 1rem;
`;

function Songs() {
  return (
    <>
      <Row type="Horizontal">
        <Heading as="h1">All Songs</Heading>
      </Row>
      <ButtonContainer>
        <Button>
          {" "}
          <HiMusicalNote /> Add New Song
        </Button>
      </ButtonContainer>
      <Row>
        <SongContainer />
      </Row>
    </>
  );
}

export default Songs;
