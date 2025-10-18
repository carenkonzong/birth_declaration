import { Plus } from "lucide-react";
import { FileText } from "lucide-react";
import { Activity } from "lucide-react";

function Dashboard_banner() {
  return (
    <>
      <div className="flex justify-center m-5 ">
        <div className="flex flex-col p-10 bg-gradient-to-r from-[#3582f8] to-[#23bf72] rounded-2xl w-full max-w-[1216px] shadow-xl">
          <div className="flex flex-row">
            <div className="flex items-center mr-3">
              <Activity size={35} color="white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold mb-2">
                Welcome to Birth Declaration Portal
              </h1>
              <h2 className="text-xl font-extralight text-white/75">
                Manage your birth declarations and documents
              </h2>
            </div>
          </div>
          <div className="flex flex-row mt-6">
            <button className="flex flex-row rounded-xl px-8 py-2 mr-5 bg-white items-center">
              <Plus color="grey" size={20} />
              <span className="ml-4">New Declaration</span>
            </button>
            <button className="flex flex-row border border-white/30 rounded-xl px-8 py-2 bg-white/25 text-white items-center">
              <FileText color="white" size={15} />{" "}
              <span className="ml-4">View All Declarations</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard_banner;
