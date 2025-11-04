import { Search } from "lucide-react";

function NoDeclaration() {
  return (
    <div className="m-10 flex flex-col items-center h-full">
      <div className="rounded-4xl p-10 bg-[#fafafa]">
        <Search size={35} />
      </div>
      <div className="text-3xl font-bold ">No declarations found</div>
    </div>
  );
}

export default NoDeclaration;
