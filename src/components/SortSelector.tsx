import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { sorts } from "@/constants/game-constants";
import { formatSortTerm } from "@/utils/text-format";
import { Button } from "@chakra-ui/react";
import { LuChevronDown } from "react-icons/lu";

type Props = {
  onSelectSortTerm: (sortType: string) => void;
  sortTerm: string | null;
};
const SortSelector = ({ onSelectSortTerm, sortTerm }: Props) => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="subtle" fontSize="lg" size="xl">
          Order By:{" "}
          {sortTerm ? <strong>{formatSortTerm(sortTerm)}</strong> : "Release"}{" "}
          <LuChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {sorts?.sort().map((sortTerm: string) => (
          <MenuItem
            key={sortTerm}
            value={sortTerm}
            onClick={() => onSelectSortTerm(sortTerm)}
            fontSize="lg"
          >
            {formatSortTerm(sortTerm)}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
