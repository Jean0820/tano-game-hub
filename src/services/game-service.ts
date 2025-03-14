import useFetchData from "@/hooks/useFetchData";

export const GetAllGames = () => {
  const { data, isLoading, error } = useFetchData("/games?platform=browser");
  return { data, isLoading, error };
};
