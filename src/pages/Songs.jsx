import Row from "../ui/Row";
import Heading from "../ui/Heading";
import SongContainer from "../features/SongContainer";

function Songs() {
  return (
    <>
      <Row type="Horizontal">
        <Heading as="h1">All Songs</Heading>
      </Row>
      <Row>
        <SongContainer />
      </Row>
    </>
  );
}

export default Songs;
