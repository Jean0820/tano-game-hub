import { Heading } from "@chakra-ui/react";
type heading = {
  title: string;
};
const GameHeading = ({ title }: heading) => {
  return (
    <Heading textWrap={"wrap"} fontSize={{ base: 40, md: 50, lg:60}} lineHeight={1.2} paddingTop={14} paddingBottom={8}>
      {title + " Games"}
    </Heading>
  );
};

export default GameHeading;
