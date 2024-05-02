import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashbord from "./pages/Dashbord";
import Songs from "./pages/Songs";
import Playlists from "./pages/Playlists";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashbord" element={<Dashbord />} />
        <Route path="songs" element={<Songs />} />
        <Route path="playlists" element={<Playlists />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
