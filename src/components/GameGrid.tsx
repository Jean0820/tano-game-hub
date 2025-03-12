import { Game } from "@/types";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";
import { GetAllGames } from "@/services/game-service";
import { skeletons } from "@/constants/game-constants";

type Props = {
  selectedGenre: string | null;
};
const GameGrid = ({ selectedGenre }: Props) => {
  const { data, isLoading, error } = GetAllGames();
  const filteredData = selectedGenre
    ? data?.filter((game: Game) => game.genre === selectedGenre)
    : data;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
      gap={5}
      padding={"10px"}
    >
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {filteredData?.map((game: Game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
