import { Game } from "@/types";
import { HStack, Icon } from "@chakra-ui/react";
import { FaWindows } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

const PlatformIconList = (game: Game) => {
  const iconMap: { [key: string]: IconType } = {
    "PC (Windows)": FaWindows,
    "Web Browser": BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {game.platform.split(",").map((platform) => (
        <Icon as={iconMap[platform.trim()]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
