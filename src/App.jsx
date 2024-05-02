import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

function App() {
  return (
    <Row type="horizontal">
      <Heading m={4} p={2} as="h1">
        Project Starter
      </Heading>
      <Button>Song</Button>{" "}
      <Input type="text" placeholder="Search for a song" />
    </Row>
  );
}

export default App;
