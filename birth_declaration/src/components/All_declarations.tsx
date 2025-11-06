import { /* CirclePlus */ FileText } from "lucide-react";
import Declaration_Card from "./Declaration_Card";
/* import { Link } from "react-router-dom"; */
import type { Declaration } from "@/Types/Declaration";
import Select from "../UI Components/Select";

type Props = {
  declarations: Declaration[];
  setfilterCriteria: (value: string) => void;
  heading: string;
  subHeading: string;
};

function All_declarations({
  declarations,
  setfilterCriteria,
  heading,
  subHeading,
}: Props) {
  return (
    <>
      <div className="flex justify-center m-5 ">
        <div className="flex w-full  p-5 border rounded-2xl border-black/10 flex-col shadow-xl bg-[#fafafa]">
          <div className="flex">
            <div>
              <h1 className="text-2xl font-semibold mb-1 flex gap-3 items-center">
                <FileText />
                {heading}
              </h1>
              <h2 className="text-gray-500 text-base font-light">
                {subHeading}
              </h2>
              <div className="flex gap-5 mt-5">
                <input
                  type="text"
                  placeholder="search by name, parent or ID..."
                  className="border border-black/10 py-0 px-10 rounded-xl bg-white w-100"
                />
                <Select
                  option1="All Status"
                  option2="Draft"
                  option3="Pending"
                  option4="Approved"
                  option5="Rejected"
                  onChange={(value) => setfilterCriteria(value)}
                />
              </div>
            </div>
            {/* <div className="ml-auto flex items-center">
              <Link
                to="/new_declaration"
                className="cursor-pointer px-6 py-3 rounded-xl text-white flex bg-gradient-to-r from-[#3582f8] via-[#a25de3] to-[#23bf72] "
              >
                <div className="mr-3 flex items-center">
                  <CirclePlus size={20} />
                </div>
                New Declaration
              </Link>
            </div> */}
          </div>
          <div>
            {declarations.map(
              ({
                declarationId,
                child,
                father,
                declarant,
                submittedAt,
                status,
              }) => (
                <Declaration_Card
                  key={declarationId}
                  id={declarationId}
                  firstName={child.firstName}
                  lastName={child.lastName}
                  birthDate={child.dateOfBirth}
                  submitionDate={submittedAt}
                  father={father.firstName}
                  mother={declarant.fullName}
                  status={status.toUpperCase()}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default All_declarations;
