import CardElement from "./CardElement";
import {
  FileText,
  Archive,
  ClipboardClock,
  CalendarCheck,
  Activity,
  CircleX,
} from "lucide-react";

type Declaration = {
  status: string;
};

type Props = {
  declarations: Declaration[];
};

function CardParent({ declarations }: Props) {
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
  const rejected = declarations.filter(
    (declaration) => declaration.status === "rejected"
  ).length;

  return (
    <>
      <div className="flex justify-center my-8 mx-5 ">
        <div className="grid-cols-2 w-full gap-5 grid lg:grid-cols-5 ">
          <CardElement
            head="All"
            total={total}
            info="All Time"
            icon={FileText}
          />
          <CardElement
            head="Draft"
            total={draft}
            info="Saved locally"
            icon={Archive}
            totalColor="#607085"
          />
          <CardElement
            head="Pending"
            total={pending}
            info="Under review"
            icon={ClipboardClock}
            trendIcon={Activity}
            totalColor="#0da2e7"
          />
          <CardElement
            head="Approved"
            total={approved}
            info="Completed"
            icon={CalendarCheck}
            totalColor="#22C55E"
          />
          <CardElement
            head="Rejected"
            total={rejected}
            info="Need review"
            icon={CircleX}
            totalColor="#FF000D"
          />
        </div>
      </div>
    </>
  );
}

export default CardParent;
