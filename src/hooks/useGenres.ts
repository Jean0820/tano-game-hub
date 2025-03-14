import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useGenres = () => {
  const fetchData = () => {
    return apiClient.get("/games").then((res) => {
      return res.data;
    });
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
  });
  return { data, isLoading, error };
};

export default useGenres;
