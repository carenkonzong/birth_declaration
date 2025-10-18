import { type LucideIcon } from "lucide-react";
import { TrendingUp } from "lucide-react";

type Props = {
  head: string;
  total: number;
  info: string;
  icon: LucideIcon;
};

function Card_element(props: Props) {
  const { head, total, info, icon: Icon } = props;

  return (
    <>
      <div className="p-5 border border-black/10 inline-block w-full rounded-xl shadow-lg bg-[#fafafa] hover:-translate-1 transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center">
          <div>
            <p className="text-gray-500 mb-2">{head}</p>
            <p className="text-3xl font-bold text-blue-500 mb-2">{total}</p>
            <p className="text-xs flex ">
              <TrendingUp size={15} color="#22C55E" />
              <span className="ml-1 text-green-500">{info}</span>
            </p>
          </div>
          <div className="flex items-center justify-center bg-blue-50 w-15 h-15 rounded-full ml-auto">
            <Icon size={35} color="#3B82F6" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card_element;
