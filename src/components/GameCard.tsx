import { Game } from "@/types";
import { Card, CardBody } from "@chakra-ui/react";
import { Heading, Image } from "@chakra-ui/react";

const GameCard = (game: Game) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.thumbnail} />
      <CardBody>
        <Heading fontSize={{base:"2xl", xl:"xl"}}>
          {game.title}
        </Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
