import { type LucideIcon } from "lucide-react";

type Props = {
  dStatus: string;
  icon: LucideIcon;
  color: string;
};

function Approved_status({ dStatus, icon: Icon, color }: Props) {
  return (
    <h1
      className={` px-3 py-1 ${color} text-white rounded-2xl flex justify-center items-center font-light text-sm`}
    >
      <div className="mr-2">
        <Icon size={18} />
      </div>
      {dStatus}
    </h1>
  );
}

export default Approved_status;
