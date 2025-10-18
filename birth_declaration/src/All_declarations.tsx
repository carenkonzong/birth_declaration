import { CirclePlus } from "lucide-react";
import Declaration_Card from "./Declaration_Card";
import { useEffect, useState } from "react";

type User = {
  id: string;
  name?: string;
  phone?: string;
  birthDate?: string;
  status?: string;
};

function All_declarations() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: User[]) => {
        setUsers(data);
        console.log(users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <>
      <div className="flex justify-center m-5 ">
        <div className="flex w-full max-w-[1216px] p-5 border rounded-2xl border-black/10 flex-col shadow-xl bg-[#fafafa]">
          <div className="flex">
            <div>
              <h1 className="text-2xl font-semibold mb-1">
                Birth Declarations
              </h1>
              <h2 className="text-gray-500 text-lg">Manage your Submissions</h2>
            </div>
            <div className="ml-auto flex items-center">
              <button className="px-6 py-3 rounded-xl text-white flex bg-gradient-to-r from-[#3582f8] via-[#a25de3] to-[#23bf72] ">
                <div className="mr-3 flex items-center">
                  <CirclePlus size={20} />
                </div>
                New Declaration
              </button>
            </div>
          </div>
          <div>
            {users.map((user) => (
              <Declaration_Card
                id={user.id}
                firstName={user.name}
                birthDate={user.phone}
                status="Submitted"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default All_declarations;
