import { type LucideIcon } from "lucide-react";

type Props = {
  btnHead: string;
  icon: LucideIcon;
  bgColor?: string;
  textColor?: string;
  iconSize?: number;
  Hover?: string;
};

function Button({
  btnHead,
  bgColor = "bg-white",
  textColor = "text-black",
  icon: Icon,
  iconSize = 20,
  Hover = "hover:bg-green-500 hover:border-white hover:text-white",
}: Props) {
  return (
    <button
      className={`px-6 py-3 rounded-xl transition-all duration-300 border border-black/10 ${textColor} flex ${bgColor} cursor-pointer ${Hover}`}
    >
      <div className="mr-3 flex items-center">
        <Icon size={iconSize} />
      </div>
      <div className="text-sm">{btnHead}</div>
    </button>
  );
}

export default Button;
