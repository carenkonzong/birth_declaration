import {
  Calendar,
  CircleCheck,
  Clock3,
  CircleX,
  CircleDashed,
} from "lucide-react";
import { Link } from "react-router";
import Approved_status from "../UI Components/Approved_status";

type Props = {
  id: string;
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  status?: string;
  submitionDate: string;
  father: string;
  mother: string;
};

function Declaration_Card({
  firstName,
  lastName,
  birthDate,
  id,
  status,
  submitionDate,
  father,
  mother,
}: Props) {
  const renderStatus = () => {
    switch (status) {
      case "APPROVED":
        return (
          <Approved_status
            dStatus="APPROVED"
            icon={CircleCheck}
            color="bg-green-400"
          />
        );
      case "PENDING":
        return (
          <Approved_status
            dStatus="SUBMITTED"
            icon={Clock3}
            color="bg-[#14a5e8]"
          />
        );
      case "REJECTED":
        return (
          <Approved_status
            dStatus="REJECTED"
            icon={CircleX}
            color="bg-red-600"
          />
        );
      case "DRAFT":
        return (
          <Approved_status
            dStatus="DRAFT"
            icon={CircleDashed}
            color="bg-gray-300"
          />
        );
      default:
        return (
          <Approved_status
            dStatus="Unknown Status"
            icon={CircleX}
            color="bg-gray-500"
          />
        );
    }
  };

  return (
    <>
      <div className="flex justify-center mt-5 ">
        <div className="flex w-full  p-5 border rounded-2xl border-black/10 bg-[#fbfbfb] hover:-translate-1 transition-all duration-300 hover:shadow-lg ">
          <div className="flex flex-col ">
            <h1 className="text-lg font-semibold mb-1">
              {firstName} {lastName}
            </h1>
            <h1 className="text-gray-500 text-sm font-extralight mb-">
              Born: {birthDate}
            </h1>
            <h1 className="text-gray-500 text-sm font-extralight mb-5">
              Father: {father} | Mother: {mother}
            </h1>
            <div className="flex items-center">
              <h1 className="text-gray-500 text-sm font-extralight mb-1 flex items-center mr-5">
                <div className="mr-1 flex">
                  <Calendar size={15} />
                </div>
                Created: {submitionDate}
              </h1>
              <h1 className="text-gray-500 text-sm font-extralight bg-gray-100 rounded-2xl flex justify-center px-3 items-center">
                ID: {id}
              </h1>
            </div>
          </div>
          <div className="ml-auto flex flex-col justify-between">
            {renderStatus()}
            <Link
              to={"/declaration_details"}
              className="border px-3 py-1 rounded-xl border-black/25 cursor-pointer hover:bg-[#23bf72] hover:text-white transition duration-300 hover:border-white"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Declaration_Card;
