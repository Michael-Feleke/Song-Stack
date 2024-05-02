import styled from "@emotion/styled";

const StyledSidebar = styled.aside`
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);

  grid-row: 1/-1;
`;

function Sidebar() {
  return <StyledSidebar>SIDEBAR</StyledSidebar>;
}

export default Sidebar;
