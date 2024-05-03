import styled from "@emotion/styled";
import Button from "../ui/Button";
import { HiOutlineFolderAdd, HiPencil, HiPlay, HiTrash } from "react-icons/hi";
import { HiPlayCircle } from "react-icons/hi2";

const CardBox = styled.div`
  width: 80%;
  margin: 0 auto;
  border-radius: 0.75rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`;

const CardDetail = styled.div`
  position: relative;
  overflow: hidden;
  border-top-right-radius: 0.75rem;
  border-top-left-radius: 0.75rem;
`;

const Img = styled.img`
  width: 100%;
  transition: 0.5s ease;
  opacity: 0.7;
  &:hover {
    transform: scale(1.1);
  }
`;

const CardLayer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5),
    var(--color-grey-700)
  );
  transition: 0.5s ease;
  transform: translateY(0%);
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
  padding: 1.5rem 1rem;
  width: 100%;
`;

function SongCard({ song }) {
  const { image, name, releasedDate, artist, album, composer } = song;

  return (
    <CardBox>
      <CardDetail>
        <Img src={image} alt={image} />
        <CardLayer>
          <Name>{name}</Name>
          <Detail>
            <Span>Released Date: </Span> {releasedDate}
          </Detail>
          <Detail>
            <Span>Artist:</Span> {artist}
          </Detail>
          <Detail>
            <Span>Album:</Span> {album}
          </Detail>
          <Detail>
            <Span>Composer:</Span> {composer}
          </Detail>
        </CardLayer>
      </CardDetail>
      <Name>{name}</Name>
      <ButtonContainer>
        <Button variation="secondary" size="small">
          <HiPencil /> Edit
        </Button>
        <Button variation="primary" size="small">
          <HiPlayCircle /> Play
        </Button>
        <Button variation="danger" size="small">
          <HiTrash /> Delete
        </Button>
      </ButtonContainer>
    </CardBox>
  );
}

export default SongCard;
