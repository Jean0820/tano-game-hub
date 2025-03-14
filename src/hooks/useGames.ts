import apiClient from "@/services/api-client";
import { GameQuery } from "@/types";
import { useQuery } from "@tanstack/react-query";

const useGames = (gameQuery: GameQuery) => {
  const fetchData = () => {
    return apiClient.get("/games", {
      params: {
        category: gameQuery.selectedGenre,
        platform: gameQuery.selectedPlatform,
      }
    }).then((res) => {
      return res.data;
    });
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["data", gameQuery],
    queryFn: fetchData,
  });
  return { data, isLoading, error };
};

export default useGames;
