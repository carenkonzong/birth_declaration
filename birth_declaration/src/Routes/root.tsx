import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

function root() {
  return (
    <div>
      <Sidebar />

      <div className="ml-65">
        <Outlet />
      </div>
    </div>
  );
}

export default root;
