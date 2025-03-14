import { Game, GameQuery } from "@/types";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";
import { skeletons } from "@/constants/game-constants";
import useGames from "@/hooks/useGames";
const GameGrid = (gameQuery: GameQuery) => {
  const { data, isLoading, error } = useGames(gameQuery);

  const filteredGames = data?.filter(
    (game: Game) =>
      !gameQuery.searchTerm ||
      game.title.toLowerCase().includes(gameQuery.searchTerm.toLowerCase())
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
      {filteredGames
        ?.sort((a: Game, b: Game) => {
          if (!gameQuery.sortTerm) return 0; // No sorting if no sortTerm is provided

          switch (gameQuery.sortTerm) {
            case "title":
              return a.title.localeCompare(b.title);
            case "release_date":
              return (
                new Date(b.release_date).getTime() -
                new Date(a.release_date).getTime()
              ); // Latest first
            case "platform":
              return a.platform.localeCompare(b.platform);
            case "genre":
              return a.genre.localeCompare(b.genre);
            case "developer":
              return a.developer.localeCompare(b.developer);
            case "publisher":
              return a.publisher.localeCompare(b.publisher);
            default:
              return 0;
          }
        })
        .map((game: Game) => (
          <GameCard key={game.id} {...game} />
        ))}
    </SimpleGrid>
  );
};

export default GameGrid;
