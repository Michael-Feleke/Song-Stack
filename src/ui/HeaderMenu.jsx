import styled from "@emotion/styled";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 2rem;
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <li>
        <DarkModeToggle />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
