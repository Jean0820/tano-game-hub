import useFetchData from "@/hooks/useFetchData";

export const GetAllGames = () => {
  const { data, isLoading, error } = useFetchData("/games");
  return { data, isLoading, error };
};
