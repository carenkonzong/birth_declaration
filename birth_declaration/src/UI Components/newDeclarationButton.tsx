import { Link } from "react-router-dom";
import { CirclePlus } from "lucide-react";

function NewDeclarationButton() {
  return (
    <div className="flex items-center">
      <Link
        to="/new_declaration"
        className="cursor-pointer px-6 py-3 rounded-xl text-white flex bg-gradient-to-r from-[#3582f8] via-[#a25de3] to-[#23bf72] "
      >
        <div className="mr-3 flex items-center">
          <CirclePlus size={20} />
        </div>
        New Declaration
      </Link>
    </div>
  );
}

export default NewDeclarationButton;
