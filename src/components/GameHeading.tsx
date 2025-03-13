import { Heading } from "@chakra-ui/react";
type heading = {
  title: string;
};
const GameHeading = ({ title }: heading) => {
  return (
    <Heading fontSize={60} paddingTop={16} paddingBottom={10}>
      {title + " Games"}
    </Heading>
  );
};

export default GameHeading;
