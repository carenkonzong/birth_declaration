import All_declarations from "../components/All_declarations";
import Card_parent from "../components/Card_parent";
import Top_bar from "../components/Top_bar";
import { useEffect, useState } from "react";
import type { Declaration } from "@/Types/Declaration";

function Dashboard() {
  const [declarations, setDeclarations] = useState<Declaration[]>([]);

  const search = async () => {
    try {
      const response = await fetch("http://localhost:8080/declarations");
      const data = await response.json();
      setDeclarations(data);
    } catch (error) {
      console.error("Error fetching declarations:", error);
    }
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
