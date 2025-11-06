import { type LucideIcon } from "lucide-react";
import { TrendingUp } from "lucide-react";

type Props = {
  head: string;
  total: number;
  info: string;
  icon: LucideIcon;
  totalColor?: string;
  trendIcon?: LucideIcon;
};

function Card_element(props: Props) {
  const {
    head,
    total,
    info,
    icon: Icon,
    totalColor = "#3b82f6",
    trendIcon: TrendIcon = TrendingUp,
  } = props;

  return (
    <div className="p-5 border border-black/10 inline-block w-full rounded-xl shadow-md bg-[#fafafa] hover:-translate-1 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center">
        <div>
          <p className="text-gray-500 mb-2">{head}</p>
          <p className="text-3xl font-bold mb-2" style={{ color: totalColor }}>
            {total}
          </p>
          <p className="text-xs flex ">
            <TrendIcon size={15} color={totalColor} />
            <span className="ml-1 text-green-500" style={{ color: totalColor }}>
              {info}
            </span>
          </p>
        </div>
        <div
          className="flex items-center justify-center w-15 h-15 rounded-full ml-auto"
          style={{ backgroundColor: `${totalColor}20` }}
        >
          <Icon size={35} color={totalColor} />
        </div>
      </div>
    </div>
  );
}

export default Card_element;
