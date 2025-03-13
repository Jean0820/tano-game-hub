import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

type Props = {
    onSearch: (searchTerm: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const searchValue = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchValue.current) onSearch(searchValue.current.value);
      }}
      style={{ width: "100%" }}
    >
      <InputGroup width={"100%"} startElement={<BsSearch size="20px" />}>
        <Input
          ref={searchValue}
          borderRadius={30}
          placeholder="Search games..."
          variant="subtle"
          size="xl"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
