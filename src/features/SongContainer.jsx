import styled from "@emotion/styled";
import SongCard from "./SongCard";

const Ul = styled.ul`
  display: grid;
  gap: 3rem;
  max-height: 100%;
  grid-template-columns: repeat(3, minmax(0, 1fr));
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
];

function SongContainer() {
  return (
    <Ul>
      {songs.map((song) => (
        <SongCard song={song} key={song.id} />
      ))}
    </Ul>
  );
}

export default SongContainer;
