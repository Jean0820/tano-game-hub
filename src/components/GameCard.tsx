import { Game } from "@/types";
import { Card, CardBody, HStack } from "@chakra-ui/react";
import { Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

const GameCard = (game: Game) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" width={"100%"}>
      <Image src={game.thumbnail} />
      <CardBody>
        <HStack justify="space-between">
          <PlatformIconList {...game} />
          <CriticScore score={game.id} />
        </HStack>
        <Heading fontSize={{ base: "2xl", xl: "xl" }}>{game.title}</Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
