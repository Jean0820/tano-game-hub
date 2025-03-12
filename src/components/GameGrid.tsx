import useFetchData from "@/hooks/useFetchData";
// import useGame from "@/hooks/useGame";
import { Game } from "@/types";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  // const { data, isLoading, error } = useGame<Game>();
  const { data, isLoading, error } = useFetchData("/games");
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

  if (error) return <p>Error: {error.message}</p>;

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
      gap={10}
      padding={"10px"}
    >
      {isLoading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {data?.map((game: Game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
