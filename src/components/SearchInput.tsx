import { Input } from '@chakra-ui/react'
import { InputGroup } from './ui/input-group';
import { BsSearch } from "react-icons/bs";


const SearchInput = () => {
  return (
    <InputGroup
      width={"100%"}
      startElement={<BsSearch size="20px" spacing={2} />}
    >
      <Input borderRadius={30} placeholder="Search games..." variant="subtle" size="xl" />
    </InputGroup>
  );
}

export default SearchInput
