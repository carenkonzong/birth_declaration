import All_declarations from "../components/All_declarations";
import Card_parent from "../components/Card_parent";
import Top_bar from "../components/Top_bar";

function Dashboard() {
  return (
    <main>
      <Top_bar />
      <Card_parent />
      <All_declarations />
    </main>
  );
}

export default Dashboard;
