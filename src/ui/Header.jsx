import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import Search from "./Search";
import Heading from "./Heading";
import MainNav from "./MainNav";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  /* border-bottom: 1px solid var(--color-grey-100); */
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 880px) {
    padding: 1.2rem 2.4rem;
  }

  @media (max-width: 600px) {
    padding: 1.2rem 2.4rem;
    justify-content: flex-start;
  }
  @media (max-width: 540px) {
    gap: 1.2rem;
  }
  @media (max-width: 400px) {
    gap: 0.6rem;
  }
`;

const Div = styled.div`
  margin-right: 20rem;
  @media (max-width: 680px) {
    margin-right: 0;
  }
`;

const Span = styled.span`
  color: var(--color-brand-600);
`;

const NavContainer = styled.div`
  display: none;
  @media (max-width: 680px) {
    display: block;
  }
`;

function Header() {
  const location = useLocation();

  const isSongsOrFavorites = location.pathname === "/songs";

  return (
    <StyledHeader>
      <NavContainer>
        <MainNav />
      </NavContainer>
      {isSongsOrFavorites ? (
        <Search />
      ) : (
        <Div>
          <Heading as="h1" style={{ width: "100%" }}>
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
