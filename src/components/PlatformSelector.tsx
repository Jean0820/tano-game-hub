import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { platforms } from "@/constants/game-constants";
import { Platform } from "@/types";
import { Button } from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

type Props = {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: string | undefined;
};
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button fontSize="lg"  variant="subtle" size="xl">
          {selectedPlatform ? selectedPlatform : "Platforms"} <LuChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {platforms?.map((platform: Platform) => (
          <MenuItem
            key={platform.id}
            value={platform.name}
            onClick={() => onSelectPlatform(platform)}
            fontSize="lg"
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
