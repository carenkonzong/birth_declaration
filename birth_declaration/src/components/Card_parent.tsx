import Card_element from "./Card_element";
import {
  FileText,
  Archive,
  ClipboardClock,
  CalendarCheck,
  Activity,
} from "lucide-react";

type Declaration = {
  status: string;
};

type Props = {
  declarations: Declaration[];
};

function Card_parent({ declarations }: Props) {
  const total = declarations.length;
  const approved = declarations.filter(
    (declaration) => declaration.status === "approved"
  ).length;
  const pending = declarations.filter(
    (declaration) => declaration.status === "pending"
  ).length;
  const draft = declarations.filter(
    (declaration) => declaration.status === "draft"
  ).length;

  return (
    <>
      <div className="flex justify-center pt-10 mx-5 ">
        <div className="w-full  grid grid-cols-4 gap-5">
          <Card_element
            head="All"
            total={total}
            info="All Time"
            icon={FileText}
          />
          <Card_element
            head="Draft"
            total={draft}
            info="Saved locally"
            icon={Archive}
            totalColor="#607085"
          />
          <Card_element
            head="Pending"
            total={pending}
            info="Under review"
            icon={ClipboardClock}
            trendIcon={Activity}
            totalColor="#0da2e7"
          />
          <Card_element
            head="Approved"
            total={approved}
            info="Completed"
            icon={CalendarCheck}
            totalColor="#22C55E"
          />
        </div>
      </div>
    </>
  );
}

export default Card_parent;
