import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

const useFetchData = (endpoint : string) => {
  const fetchData = () => {
    return apiClient.get(endpoint).then((res) => {      
      return res.data.list;
    });
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
  });
  return { data, isLoading, error };
};

export default useFetchData;
