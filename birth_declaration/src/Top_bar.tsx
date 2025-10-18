import { PanelLeft, Globe, Sun } from "lucide-react";

function Top_bar() {
  return (
    <div className="h-18 shadow-md bg-[#fbfbfb] border-b border-black/10 w-full px-10 py-3 flex justify-between items-center">
      <div className="flex items-center ">
        <div className="hover:bg-[#23bf72] hover:text-white cursor-pointer transition-all duration-300 p-2 mr-8 rounded-4xl">
          <PanelLeft size={20} />
        </div>
        <div>
          <input
            type="text"
            placeholder="search declarations..."
            className="border border-black/10 py-3 px-10 rounded-xl"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex mr-5 items-center rounded-2xl cursor-pointer hover:text-white hover:bg-[#23bf72] transition-all duration-300 px-4 py-2">
          <div className="mr-5">
            <Globe size={17} />
          </div>
          <div className="text-sm">EN</div>
        </div>
        <div className="hover:bg-[#23bf72] hover:text-white cursor-pointer transition-all duration-300 p-3 rounded-2xl">
          <Sun size={18} />
        </div>
      </div>
    </div>
  );
}

export default Top_bar;
