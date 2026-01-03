import { Activity, House, FileText, User, Bell, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
  const citezen = true;

  return (
    <>
      <aside className="bg-[#fbfbfb] border-r border-black/10 w-65 fixed flex flex-col h-full">
        <>
          <div className="flex justify-center mx-5 mb-5 mt-5">
            <div className="flex flex-col py-8 px-5 my-2 bg-linear-to-r from-[#3582f8] to-[#23bf72] rounded-2xl w-full max-w-[1216px] shadow-xl">
              <div className="flex flex-row mb-5">
                <div className="flex items-center mr-3">
                  <Activity size={35} color="white" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold mb-1">Birth Registry</h1>
                  <h2 className="text-base font-thin text-white/75">
                    {citezen ? "Citizen Portal" : "Admin Portal"}
                  </h2>
                </div>
              </div>
              <h1 className="text-lg font-semibold">
                Welcome to Birth Declaration Portal
              </h1>
              <h1 className="text-sm font-thin text-white">
                Manage your declarations
              </h1>
            </div>
          </div>
          <hr className="border-black/10" />
        </>

        <div className="p-3 px-3 mt-5 flex flex-col  text-gray-500">
          <div className="mb-15 px-3">
            <h1 className="mb-5 px-3 text-sm">NAVIGATION</h1>
            <ul>
              <li>
                <Link
                  className="flex px-3 text-sm py-2 rounded-2xl items-center shadow-blue-700/10 hover:-translate-y-1 transition-all duration-300 hover:bg-[#f4f3f5] hover:text-black hover:shadow-md cursor-pointer"
                  to="/"
                >
                  <House size={18} className="mr-5" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="flex px-3 py-2 text-sm rounded-2xl shadow-blue-700/10 items-center hover:-translate-y-1 transition-all duration-300 hover:bg-[#f4f3f5] hover:text-black hover:shadow-md cursor-pointer"
                >
                  <FileText size={18} className="mr-5" />
                  All Declarations
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-3">
            <h1 className="mb-5 px-3 text-sm">ACCOUNT</h1>
            <ul>
              <li className="flex px-3 py-2 text-sm rounded-2xl items-center shadow-blue-700/10 hover:-translate-y-1 transition-all duration-300 hover:bg-[#f4f3f5] hover:text-black hover:shadow-md cursor-pointer">
                <User size={18} className="mr-5" />
                Profile
              </li>
              <li className="flex px-3 py-2 text-sm rounded-2xl items-center shadow-blue-700/10 hover:-translate-y-1 transition-all duration-300 hover:bg-[#f4f3f5] hover:text-black hover:shadow-md cursor-pointer">
                <Bell size={18} className="mr-5" />
                Notifications
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-auto">
          <hr className="border-black/10" />
          <h1 className="m-2 p-3 text-sm rounded-2xl flex items-center text-gray-500 hover:-translate-1 transition-all duration-300 hover:bg-red-200/20 hover:shadow-md cursor-pointer">
            <LogOut size={18} className="mr-5" />
            Logout
          </h1>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
