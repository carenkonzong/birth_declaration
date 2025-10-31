import All_declarations from "../components/All_declarations";
import Card_parent from "../components/Card_parent";
import Top_bar from "../components/Top_bar";
import { useEffect, useState } from "react";

type Declarations = {
  id: string;
  child: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
  };
  father: {
    firstName: string;
  };
  declarant: {
    fullName: string;
  };
  submittedAt: string;
  status: string;
  declarationId: string;
};

function Dashboard() {
  const [declarations, setDeclarations] = useState<Declarations[]>([]);

  const search = async () => {
    const response = await fetch("http://localhost:8080/declarations");
    const data = await response.json();
    setDeclarations(data);
    console.log(data);
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <main>
      <Top_bar />
      <Card_parent declarations={declarations} />
      <All_declarations declarations={declarations} />
    </main>
  );
}

export default Dashboard;
