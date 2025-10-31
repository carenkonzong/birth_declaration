import { Clock } from "lucide-react";

type Props = {
  status: string;
};

function Pending_status({ status }: Props) {
  return (
    <h1 className="bg-blue-500 px-3 py-1 text-white rounded-2xl flex justify-center items-center font-light text-sm">
      <div className="mr-2">
        <Clock size={18} />
      </div>
      {status}
    </h1>
  );
}

export default Pending_status;
