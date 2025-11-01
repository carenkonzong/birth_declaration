import { CirclePlus } from "lucide-react";
import Declaration_Card from "./Declaration_Card";
import { Link } from "react-router-dom";
import type { Declaration } from "../Types/Declaration";

type Props = {
  declarations: Declaration[];
};

function All_declarations({ declarations }: Props) {
  return (
    <>
      <div className="flex justify-center m-5 ">
        <div className="flex w-full  p-5 border rounded-2xl border-black/10 flex-col shadow-xl bg-[#fafafa]">
          <div className="flex">
            <div>
              <h1 className="text-2xl font-semibold mb-1">
                Birth Declarations
              </h1>
              <h2 className="text-gray-500 text-lg">Manage your Submissions</h2>
            </div>
            <div className="ml-auto flex items-center">
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
