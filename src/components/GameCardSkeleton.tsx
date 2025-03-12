import { Card, CardBody, Skeleton } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card.Root width={{ xl: "315px" }} borderRadius={10} overflow="hidden">
      <Skeleton height={{ sm: "230px", xl: "195px" }} />
      <CardBody>
        <Skeleton height="15px" marginY={1} />
        <Skeleton height="15px" />
      </CardBody>
    </Card.Root>
  );
}

export default GameCardSkeleton
