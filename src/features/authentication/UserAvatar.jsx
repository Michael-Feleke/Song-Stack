import styled from "@emotion/styled";
// import { useUser } from "./useUser";

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
  // const { user } = useUser();
  // const { fullName, avatar } = user.user_metadata;
  return (
    <StyledUserAvatar>
      <Avatar
        // src={avatar || "default-user.jpg"}
        src={"profile.jpg"}
        // alt={`Avatar of ${fullName}`}
        alt={`Avatar of `}
      />
      <Span>Michael</Span>
      {/* <span>{fullName}</span> */}
    </StyledUserAvatar>
  );
}

export default UserAvatar;
