import { type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  btnHead: string;
  icon: LucideIcon;
  bgColor?: string;
  textColor?: string;
  iconSize?: number;
  Hover?: string;
  link: string;
};

function Button({
  btnHead,
  bgColor = "bg-white",
  textColor = "text-black",
  icon: Icon,
  iconSize = 20,
  Hover = "hover:bg-green-500 hover:border-white hover:text-white",
  link,
}: Props) {
  return (
    <Link
      to={link}
      className={`px-6 py-3 rounded-xl transition-all duration-300 border border-black/10 ${textColor} flex ${bgColor} cursor-pointer ${Hover}`}
    >
      <div className="mr-3 flex items-center">
        <Icon size={iconSize} />
      </div>
      <div className="text-sm">{btnHead}</div>
    </Link>
  );
}

export default Button;
