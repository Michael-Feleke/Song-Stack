import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashbord from "./pages/Dashbord";
import Songs from "./pages/Songs";
import Playlists from "./pages/Playlists";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashbord" />} />
            <Route path="dashbord" element={<Dashbord />} />
            <Route path="songs" element={<Songs />} />
            <Route path="playlists" element={<Playlists />} />
            <Route path="about" element={<About />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
