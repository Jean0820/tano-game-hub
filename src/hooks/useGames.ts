import ApiClient from "@/services/api-client";
import { GameQuery } from "@/types";
import { useQuery } from "@tanstack/react-query";
const apiClient = new ApiClient("/games");
const useGames = (gameQuery: GameQuery) => {
  
  const { data, isLoading, error } = useQuery({
    queryKey: ["data", gameQuery],
    queryFn: () => apiClient.getAll({
      params: {
        category: gameQuery.selectedGenre,
        platform: gameQuery.selectedPlatform,
      },
    }),
  });
  return { data, isLoading, error };
};

export default useGames;
