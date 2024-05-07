import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import Search from "./Search";
import Heading from "./Heading";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

const Div = styled.div`
  margin-right: 20rem;
`;

const Span = styled.span`
  color: var(--color-brand-600);
`;

function Header() {
  const location = useLocation();

  const isSongsOrFavorites = location.pathname === "/songs";

  return (
    <StyledHeader>
      {isSongsOrFavorites ? (
        <Search />
      ) : (
        <Div>
          <Heading as="h1">
            Song <Span>Stack</Span>
          </Heading>
        </Div>
      )}
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
