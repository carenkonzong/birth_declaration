import type { LucideIcon } from "lucide-react";
import { Children, type ReactNode } from "react";

type Props = {
  label: string;
  info: string;
  icon?: LucideIcon;
  size?: number;
  children?: ReactNode;
};
function Details({ label, info, icon: Icon, size = 18, children }: Props) {
  return (
    <div className="mt-5">
      <h1 className="text-gray-500 text-sm">{label}</h1>
      <h2 className="font-light text-gray-800 flex items-center">
        {Icon && <Icon size={size} className="mr-3" />}
        {info}
      </h2>
      {children}
    </div>
  );
}

export default Details;
