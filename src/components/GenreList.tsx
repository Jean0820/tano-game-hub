import { GetAllGames } from "@/services/game-service";
import { Game } from "@/types";
import { HStack, Image, Link, List, ListItem, Text } from "@chakra-ui/react";
import { CircularProgress } from "@mui/material";

type Props = {
  onSelectGenre: (genre: string) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = GetAllGames();
  const uniqueGenres: string[] = Array.from(
    new Set(data?.map((game: Game) => game.genre.trim()))
  );
  if (error) return <p>Error: {error.message}</p>;
  if (isLoading) return <CircularProgress size="30px" color="secondary" />;

  return (
    <List.Root>
      <Text>
        <Link onClick={() => onSelectGenre("")}>All</Link>
      </Text>
      {uniqueGenres.map((genre: string) => (
        <ListItem key={genre} paddingY="5px" listStyle="none">
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={"https://www.freetogame.com/g/14/thumbnail.jpg"}
            />
            <Text>
              <Link onClick={() => onSelectGenre(genre)}>{genre}</Link>
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
