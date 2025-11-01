import All_declarations from "../components/All_declarations";
import Card_parent from "../components/Card_parent";
import Top_bar from "../components/Top_bar";
import useDeclarations from "../hooks/use-declarations/useDeclarations";

function Dashboard() {
  const { declarations } = useDeclarations();

  return (
    <main>
      <Top_bar />
      <Card_parent declarations={declarations} />
      <All_declarations declarations={declarations} />
    </main>
  );
}

export default Dashboard;
