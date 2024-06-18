import styled from "@emotion/styled";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);

  @media (max-width: 430px) {
    display: none;
  }
`;

const Span = styled.span`
  @media (max-width: 510px) {
    display: none;
  }
`;

function UserAvatar() {
  return (
    <StyledUserAvatar>
      <Avatar src={"profile.jpg"} alt={`Avatar of `} />
      <Span>Michael</Span>{" "}
    </StyledUserAvatar>
  );
}

export default UserAvatar;
