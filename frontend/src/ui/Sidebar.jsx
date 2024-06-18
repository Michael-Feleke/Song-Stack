import styled from "@emotion/styled";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  padding: 3.2rem 2.4rem;
  background-color: var(--color-grey-0);

  grid-row: 1/-1;

  @media (max-width: 800px) {
    padding: 10rem 1.6rem;
  }
  @media (max-width: 680px) {
    display: none;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
