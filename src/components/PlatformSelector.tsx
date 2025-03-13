import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { GetAllGames } from "@/services/game-service";
import { Game } from "@/types";
import { Button } from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

type Props = {
  onSelectPlatform: (platform: string) => void;
  selectedPlatform: string | null;
};
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, isLoading, error } = GetAllGames();
  const platforms: string[] = Array.from(
    new Set(data?.map((game: Game) => game.platform.trim()))
  );
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="subtle" size="xl">
          {selectedPlatform ? selectedPlatform : "Platforms"} <LuChevronDown/>
        </Button>
      </MenuTrigger>
      <MenuContent>
        {platforms?.map((platform: string) => (
          <MenuItem
            key={platform}
            value={platform}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
