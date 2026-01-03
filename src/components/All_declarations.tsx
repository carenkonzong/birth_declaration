import { /* CirclePlus */ FileText } from "lucide-react";
import Declaration_Card from "./Declaration_Card";
/* import { Link } from "react-router-dom"; */
import type { Declaration } from "@/types/Declaration";
import Select from "../ui/Select";

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
  const declarationsSorted = declarations.sort();
  console.log(declarationsSorted);

  return (
    <div className="flex justify-center m-5 ">
      <div className="flex w-full  p-5 border rounded-2xl border-black/10 flex-col shadow-xl bg-[#fafafa]">
        <div className="flex">
          <div>
            <h1 className="text-2xl font-semibold mb-1 flex gap-3 items-center">
              <FileText />
              {heading}
            </h1>
            <h2 className="text-gray-500 text-base font-light">{subHeading}</h2>
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
              <Select
                option1="Status"
                value1="status"
                option2="Name A-Z"
                value2="firstName"
                option3="Newest First"
                value3="submittedAt"
                option4="Oldest First"
              />
            </div>
          </div>
        </div>
        <div>
          {declarations.map(
            ({
              declarationId,
              child,
              father,
              mother,
              submittedAt,
              status = "draft",
              id,
            }) => (
              <Declaration_Card
                key={id}
                fetchId={declarationId || "Unknown"}
                id={declarationId || "Unknown ID"}
                firstName={child.firstName}
                lastName={child.lastName}
                birthDate={child.dateOfBirth}
                submitionDate={submittedAt}
                fatherFirstName={father.firstName}
                fatherLastName={father.lastName}
                motherFirstName={mother.firstName}
                motherLastName={mother.lastName}
                status={status.toUpperCase()}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default All_declarations;
