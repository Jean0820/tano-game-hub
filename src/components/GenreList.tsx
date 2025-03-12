import { GetAllGames } from "@/services/game-service";
import { Game } from "@/types";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading, error } = GetAllGames();
  const uniqueGenres: string[] = Array.from(
    new Set(data?.map((game: Game) => game.genre))
  );
  if (error) return <p>Error: {error.message}</p>;
  if (isLoading) return <p>Loading...</p>;
  return (
    <List.Root>
      {uniqueGenres.map((genre: string) => (
        <ListItem key={genre} paddingY="5px" listStyle="none">
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={"https://www.freetogame.com/g/14/thumbnail.jpg"}
            />
            <Text >
              {genre}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
