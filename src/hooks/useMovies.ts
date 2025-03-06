import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

const useMovie = <T>(deps?: T) => {
  const [data, setData] = useState<T[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get("/new-horror", { signal: controller.signal })
      .then((res) => {
        setData(res.data.list);
        setIsLoading(false);
        console.log(res.data.list);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return null;
        setError(err);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, [deps]);

  return { data, isLoading, error };
};

export default useMovie;
