import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

function App() {
  return (
    <div>
      <Heading m={4} p={2} as="h1">
        Project Starter
      </Heading>
      <Button>Song</Button>{" "}
      <Input type="text" placeholder="Search for a song" />
    </div>
  );
}

export default App;
