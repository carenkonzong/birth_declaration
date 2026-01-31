import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import { Toaster } from "@/components/ui/sonner";

function root() {
  return (
    <div>
      <Sidebar />

      <div className="ml-65">
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
}

export default root;
