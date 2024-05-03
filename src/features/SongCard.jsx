import styled from "@emotion/styled";
import Button from "../ui/Button";
import { HiPencil, HiTrash } from "react-icons/hi";

const Li = styled.li`
  margin-left: auto;
  margin-right: auto;
`;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-grey-700);
  background-color: var(--color-grey-0);
  width: 32rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
`;

const ImageContainer = styled.div`
  position: relative;
  margin: 1.5rem 1.5rem 1rem 1.5rem;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-700);
  background-color: var(--color-grey-0);
  border-radius: 0.75rem;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
`;

const DetailContainer = styled.div`
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  height: 15rem;
`;

const Name = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Detail = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  width: 100%;
  border-top: 1px solid var(--color-grey-300);
`;

function SongCard({ song }) {
  const { image, name, releasedDate, artist, album, composer } = song;

  return (
    <Li>
      <CardContainer>
        <ImageContainer>
          <Img src={image} alt={image} />
        </ImageContainer>
        <DetailContainer>
          <Name>{name}</Name>
          <Detail>Released Date: {releasedDate}</Detail>
          <Detail>Artist: {artist}</Detail>
          <Detail>Album: {album}</Detail>
          <Detail>Composer: {composer}</Detail>
        </DetailContainer>
        <ButtonContainer>
          <Button variation="secondary">
            <HiPencil /> Edit
          </Button>
          <Button variation="danger">
            <HiTrash /> Delete
          </Button>
        </ButtonContainer>
      </CardContainer>
    </Li>
  );
}

export default SongCard;
