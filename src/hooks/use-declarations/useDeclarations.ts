import { useEffect, useState } from "react";
import type { Declaration } from "@/types/Declaration";
import { ENV } from "../../config/env";

function useDeclarations() {
  const [declarations, setDeclarations] = useState<Declaration[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDeclarations = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(`${ENV.API_URL}/declarations`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setDeclarations(data);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to fetch declarations";
      setError(message);
      console.log(error);

      console.error("Error fetching declarations:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDeclarations();
  }, []);

  return { declarations, isLoading, error };
}

export default useDeclarations;
