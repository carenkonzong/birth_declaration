import { type LucideIcon } from "lucide-react";

type Props = {
  type: string;
  head: string;
  placeholder?: string;
  icon?: LucideIcon;
  id?: string;
  htmlfor?: string;
};

function Input({ head, type, placeholder, id, htmlfor }: Props) {
  return (
    <div className="mb-5">
      <label className="text-sm" htmlFor={htmlfor}>
        {head}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        className="border rounded-lg w-full border-black/10 bg-white p-2 mt-3"
      ></input>
    </div>
  );
}

export default Input;
