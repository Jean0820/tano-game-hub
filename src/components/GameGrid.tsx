import { Game } from "@/types";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";
import { GetAllGames } from "@/services/game-service";
import { skeletons } from "@/constants/game-constants";

type Props = {
  selectedGenre: string | null;
  selectedPlatform: string | null;
  searchTerm: string | null;
};
const GameGrid = ({ selectedGenre, selectedPlatform, searchTerm }: Props) => {
  const { data, isLoading, error } = GetAllGames();

  const filteredGames = data
    ?.filter(
      (game: Game) =>
        !searchTerm ||
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((game: Game) => !selectedGenre || game.genre === selectedGenre)
    .filter(
      (game: Game) => !selectedPlatform || game.platform === selectedPlatform
    );

  if (error) return <p>Error: {error.message}</p>;
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3, xl: 5 }}
      gap={5}
      paddingY={"10px"}
    >
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {filteredGames?.map((game: Game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
