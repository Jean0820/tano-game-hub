import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding="10px">
      <Image src={logo} alt="logo" boxSize={"60px"} />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
