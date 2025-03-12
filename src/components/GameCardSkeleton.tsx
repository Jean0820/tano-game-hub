import { Card, CardBody, Skeleton } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Skeleton height={{ base: "220px", lg: "189px", xl: "184px" }} />
      <CardBody>
        <Skeleton height="15px" marginY={1} />
        <Skeleton height="15px" />
      </CardBody>
    </Card.Root>
  );
}

export default GameCardSkeleton
