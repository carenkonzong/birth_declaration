import All_declarations from "../components/AllDeclarations";
import CardParent from "../components/CardParent";
import useDeclarations from "../hooks/use-declarations/useDeclarations";
import { ErrorFetchingDeclaration } from "./error pages/ErrorFetchingDeclaration";
import { useState } from "react";
import NewDeclarationButton from "../ui (custom)/newDeclarationButton";
import Button from "../ui (custom)/Button";
import { FileText } from "lucide-react";
import TopBar from "../components/TopBar";

function Dashboard() {
  const { declarations, isLoading, error } = useDeclarations();
  const [filterCriteria, setfilterCriteria] = useState("All Status");

  const declarationFiltered =
    filterCriteria === "All Status"
      ? declarations
      : declarations.filter(
          (declaration) => declaration.status === filterCriteria.toLowerCase()
        );

  if (isLoading) {
    return (
      <>
        <TopBar />
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
        </div>
      </>
    );
  } else if (error) {
    return (
      <>
        <TopBar />
        <ErrorFetchingDeclaration />
      </>
    );
  } else {
    return (
      <main>
        <TopBar />
        <div className="flex gap-5 mt-8 ml-5">
          <NewDeclarationButton />
          <Button btnHead="View All Declarations" icon={FileText} link="/" />
        </div>
        <CardParent declarations={declarations} />
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
