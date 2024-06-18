import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "@emotion/styled";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 1000px) {
    grid-template-columns: 20rem 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 10rem 1fr;
  }
  @media (max-width: 680px) {
    grid-template-rows: auto 1fr;
    grid-template-columns: auto;
    overflow: auto;
  }
`;

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  background-color: var(--color-grey-50);
  overflow-y: auto;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
