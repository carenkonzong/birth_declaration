import Card_element from "./Card_element";
import { File, Archive, ClipboardClock, CalendarCheck } from "lucide-react";

function Card_parent() {
  return (
    <>
      <div className="flex justify-center pt-10 mx-5 ">
        <div className="w-full max-w-[1216px] grid grid-cols-4 gap-5">
          <Card_element
            head="Total Declarations"
            total={8}
            info="All Time"
            icon={File}
          />
          <Card_element
            head="Draft"
            total={1}
            info="Saved locally"
            icon={Archive}
          />
          <Card_element
            head="Submitted"
            total={3}
            info="Under review"
            icon={ClipboardClock}
          />
          <Card_element
            head="Approved"
            total={1}
            info="Completed"
            icon={CalendarCheck}
          />
        </div>
      </div>
    </>
  );
}

export default Card_parent;
