import styled from "@emotion/styled";
import { space } from "styled-system";

const H1 = styled.h1`
  ${space}
  color: red;
`;

function App() {
  return (
    <H1 m={4} p={2}>
      Project Starter
    </H1>
  );
}

export default App;
