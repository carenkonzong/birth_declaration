import All_declarations from "../components/All_declarations";
import Card_parent from "../components/Card_parent";
import Top_bar from "../components/Top_bar";
import useDeclarations from "../hooks/use-declarations/useDeclarations";
import NoDeclaration from "../components/noDeclaration";
import { useState } from "react";
import NewDeclarationButton from "../UI Components/newDeclarationButton";
import Button from "../UI Components/Button";
import { FileText } from "lucide-react";

function Dashboard() {
  const { declarations } = useDeclarations();
  const [filterCriteria, setfilterCriteria] = useState("All Status");

  const declarationFiltered =
    filterCriteria === "All Status"
      ? declarations
      : declarations.filter(
          (declaration) => declaration.status === filterCriteria.toLowerCase()
        );

  if (declarations.length === 0) {
    return (
      <>
        <Top_bar />
        <NoDeclaration />
      </>
    );
  } else {
    return (
      <main>
        <Top_bar />
        <div className="flex gap-5 mt-8 ml-5">
          <NewDeclarationButton />
          <Button btnHead="View All Declarations" icon={FileText} link="/" />
        </div>
        <Card_parent declarations={declarations} />
        <All_declarations
          declarations={declarationFiltered}
          setfilterCriteria={setfilterCriteria}
          heading="Your Declarations"
          subHeading="Search and filter through all your birth declarations"
        />
      </main>
    );
  }
}

export default Dashboard;
