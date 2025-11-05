import { type LucideIcon } from "lucide-react";

type Props = {
  type: string;
  head: string;
  placeholder?: string;
  icon?: LucideIcon;
};

function Input({ head, type, placeholder }: Props) {
  return (
    <div className="mb-5">
      <h3 className="mb-3 text-sm">{head}</h3>
      <input
        type={type}
        placeholder={placeholder}
        className="border rounded-lg w-full border-black/10 bg-white p-2"
      ></input>
    </div>
  );
}

export default Input;
