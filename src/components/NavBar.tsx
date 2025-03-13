import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} alt="logo" boxSize={"60px"} />
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
