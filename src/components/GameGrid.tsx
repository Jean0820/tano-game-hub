import useFetchData from "@/hooks/useFetchData";
// import useGame from "@/hooks/useGame";
import { Game } from "@/types";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";

const GameGrid = () => {
  // const { data, isLoading, error } = useGame<Game>();
  const { data, isLoading, error } = useFetchData("/games");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 5 }} gap={10} padding={"10px"}>
      {data?.map((game: Game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
