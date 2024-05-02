import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <p>App layout</p>
      <Outlet />
    </div>
  );
}

export default AppLayout;
