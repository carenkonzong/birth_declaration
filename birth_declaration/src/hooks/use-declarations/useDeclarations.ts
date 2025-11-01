import { useEffect, useState } from "react";
import type { Declaration } from "@/Types/Declaration";

function useDeclarations() {
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

  return { declarations };
}

export default useDeclarations;
