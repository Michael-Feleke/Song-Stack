import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashbord from "./pages/Dashbord";
import Songs from "./pages/Songs";
import Playlists from "./pages/Playlists";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";

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
            <Route path="favorites" element={<Favorites />} />
            <Route path="playlists" element={<Playlists />} />
            <Route path="about" element={<About />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </>
  );
}

export default App;
