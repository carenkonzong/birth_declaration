import Button from "./UI Components/Button";
import { ArrowLeft } from "lucide-react";

type Props = {
  head: string;
  subhead: string;
  maxWidth?: string;
};

function Heading({ head, subhead, maxWidth = "max-w-[1216px]" }: Props) {
  return (
    <div className="flex justify-center m-5 ">
      <div className={`flex w-full ${maxWidth} flex-col`}>
        <div className="flex">
          <div>
            <h1 className="text-2xl font-semibold mb-1">{head}</h1>
            <h2 className="text-gray-500 text-lg">{subhead}</h2>
          </div>
          <div className="ml-auto flex items-center">
            <Button btnHead="Back to Dashboard" icon={ArrowLeft} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
