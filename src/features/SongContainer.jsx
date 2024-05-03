import styled from "@emotion/styled";
import SongCard from "./SongCard";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: 0 0 1rem var(--bg-color);
`;

const songs = [
  {
    songId: 1,
    image: "logo-light.png",
    name: "Tikur Sew",
    releasedDate: "05/07/2006",
    artist: "Teddy Aftro",
    album: "Tikur Sew",
    composer: "Michael Hailu",
  },
  {
    songId: 2,
    image: "logo-light.png",
    name: "Tikur Sew",
    releasedDate: "05/07/2006",
    artist: "Teddy Aftro",
    album: "Tikur Sew",
    composer: "Michael Hailu",
  },
  {
    songId: 3,
    image: "logo-light.png",
    name: "Tikur Sew",
    releasedDate: "05/07/2006",
    artist: "Teddy Aftro",
    album: "Tikur Sew",
    composer: "Michael Hailu",
  },
  {
    songId: 4,
    image: "logo-light.png",
    name: "Tikur Sew",
    releasedDate: "05/07/2006",
    artist: "Teddy Aftro",
    album: "Tikur Sew",
    composer: "Michael Hailu",
  },
  {
    songId: 5,
    image: "logo-light.png",
    name: "Tikur Sew",
    releasedDate: "05/07/2006",
    artist: "Teddy Aftro",
    album: "Tikur Sew",
    composer: "Michael Hailu",
  },
  {
    songId: 6,
    image: "logo-light.png",
    name: "Tikur Sew",
    releasedDate: "05/07/2006",
    artist: "Teddy Aftro",
    album: "Tikur Sew",
    composer: "Michael Hailu",
  },
];

function SongContainer() {
  return (
    <Container>
      {songs.map((song) => (
        <SongCard song={song} key={song.id} />
      ))}
    </Container>
  );
}

export default SongContainer;
