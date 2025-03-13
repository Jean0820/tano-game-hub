import { genres } from "@/constants/game-constants";
import { Genre } from "@/types";
import { Heading, HStack, Image, Link, List, ListItem, Text } from "@chakra-ui/react";

type Props = {
  onSelectGenre: (genre: string) => void;
  selectedGenre: string | null;
};

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  return (
    <List.Root>
      <Heading fontSize="2xl" paddingY={4}>
        Genres
      </Heading>
      {genres.sort().map((genre: Genre) => (
        <ListItem key={genre.id} paddingY={2} listStyle="none">
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={genre.imageUrl}
            />
            <Text>
              <Link
              fontSize="lg"
                fontWeight={selectedGenre === genre.name ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre.name)}
              >
                {genre.name}
              </Link>
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
