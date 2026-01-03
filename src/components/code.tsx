import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  size?: number;
  color?: string;
};

function Card({ icon: Icon, size = 32, color = "#3B82F6" }: Props) {
  return (
    <>
      <Icon size={size} color={color} />
    </>
  );
}

export default Card;
