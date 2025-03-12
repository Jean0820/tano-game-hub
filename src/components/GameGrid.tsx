import { Game } from "@/types";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";
import { GetAllGames } from "@/services/game-service";
import { skeletons } from "@/constants/game-constants";

const GameGrid = () => {
  const { data, isLoading, error } = GetAllGames();
  if (error) return <p>Error: {error.message}</p>;
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
      gap={10}
      padding={"10px"}
    >
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {data?.map((game: Game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
