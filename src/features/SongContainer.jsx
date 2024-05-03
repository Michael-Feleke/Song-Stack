import styled from "@emotion/styled";
import SongCard from "./SongCard";

const Ul = styled.ul`
  display: grid;
  gap: 3rem;
  max-height: 100%;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;

function SongContainer() {
  return (
    <Ul>
      <SongCard />
    </Ul>
  );
}

export default SongContainer;
