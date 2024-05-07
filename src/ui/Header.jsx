import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import Search from "./Search";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  const location = useLocation();

  const isSongsOrFavorites =
    location.pathname === "/songs" || location.pathname === "/favorites";

  return (
    <StyledHeader>
      {isSongsOrFavorites && <Search />}
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
