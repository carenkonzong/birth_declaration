import { useEffect, useState } from "react";
import type { Declaration } from "@/types/Declaration";
import { ENV } from "../../config/env";

function useDeclarations() {
  const [declarations, setDeclarations] = useState<Declaration[]>([]);

  const search = async () => {
    try {
      const response = await fetch(`${ENV.API_URL}/declarations`);
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
