import { Save, Send } from "lucide-react";
import Button from "./UI Components/Button";

function Bottom() {
  return (
    <div className="flex justify-center mb-5">
      <div className="max-w-[1024px] bg-[#fbfbfb] border w-full p-5 shadow-lg rounded-2xl border-black/10 flex justify-between">
        <Button btnHead="Save as Draft" icon={Save} />
        <Button
          btnHead="Submit Declaration"
          icon={Send}
          bgColor="bg-[#3582f8]"
          textColor="text-white"
          Hover="hover:bg-[#075bd9] hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
        />
      </div>
    </div>
  );
}

export default Bottom;
