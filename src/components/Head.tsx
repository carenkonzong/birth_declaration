import { User, type LucideIcon } from "lucide-react";

type Props = {
  head: string;
  size?: number;
  subhead?: string;
  icon?: LucideIcon;
};

function Head({ size = 18, head, subhead, icon: Icon = User }: Props) {
  return (
    <>
      <div className="flex font-semibold text-2xl items-center">
        <Icon size={size} className="mr-3" />
        {head}
      </div>
      <div className="text-gray-500">{subhead}</div>
    </>
  );
}

export default Head;
