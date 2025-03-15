import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new ApiClient("/games")
const useGenres = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["data"],
    queryFn: () => apiClient.getAll,
  });
  return { data, isLoading, error };
};

export default useGenres;
