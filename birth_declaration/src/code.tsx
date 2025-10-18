import type { LucideIcon } from "lucide-react";

/**
 * Props for the Card component
 * - icon: must be a valid Lucide icon component
 * - size: optional, defaults to 32
 * - color: optional, defaults to #3B82F6
 */
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
