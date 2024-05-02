import styled from "@emotion/styled";
import { space } from "styled-system";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  ${space}
  color: var(--color-brand-600);
`;

function App() {
  return (
    <div>
      <H1 m={4} p={2}>
        Project Starter
      </H1>
      <Button>Song</Button>{" "}
      <Input type="text" placeholder="Search for a song" />
    </div>
  );
}

export default App;
