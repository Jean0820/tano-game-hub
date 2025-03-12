import { Badge } from "@chakra-ui/react";

type Props = {
  score: number;
};
const CriticScore = ({ score }: Props) => {
  const color = score > 200 ? "green" : score > 100 ? "yellow" : "";
  return (
    <Badge colorPalette={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
