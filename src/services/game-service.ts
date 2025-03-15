import useFetchData from "@/hooks/useFetchData";

export const GetAllGames = () => {
  const { data, isLoading, error } = useFetchData();
  return { data, isLoading, error };
};
