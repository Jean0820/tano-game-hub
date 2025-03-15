import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
const apiClient = new ApiClient("/games");
const useFetchData = () => {
  const fetchData = () => {
    return apiClient.getAll
  }; 
  const { data, isLoading, error } = useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
  });
  return { data, isLoading, error };
};

export default useFetchData;
