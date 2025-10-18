import { Clock, Calendar } from "lucide-react";

type Props = {
  id: string;
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  status?: string;
};

function Declaration_Card(props: Props) {
  const { firstName, lastName, birthDate, id, status } = props;

  return (
    <>
      <div className="flex justify-center mt-5 ">
        <div className="flex w-full max-w-[1216px] p-5 border rounded-2xl border-black/10 bg-[#fbfbfb] hover:-translate-1 transition-all duration-300 hover:shadow-lg ">
          <div>
            <h1 className="text-xl font-semibold mb-1">
              {firstName} {lastName}
            </h1>
            <h1 className="text-gray-500 text-sm mb-1">Born: {birthDate}</h1>
            <h1 className="text-gray-500 text-sm mb-1 flex items-center">
              <div className="mr-1 flex">
                <Calendar size={15} />
              </div>
              Created: 1/16/2024
            </h1>
            <h1 className="text-gray-500 text-sm bg-gray-100 rounded-2xl flex justify-center">
              ID: {id}
            </h1>
          </div>
          <div className="ml-auto flex flex-col justify-between">
            <h1 className="bg-blue-500 px-3 py-1 text-white rounded-2xl flex justify-center items-center">
              <div className="mr-2">
                <Clock size={20} />
              </div>
              {status}
            </h1>
            <button className="border px-3 py-1 rounded-xl border-black/25 cursor-pointer hover:bg-[#23bf72] hover:text-white transition duration-300 hover:border-white">
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Declaration_Card;
