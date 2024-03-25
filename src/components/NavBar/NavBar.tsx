import { HStack, Image } from "@chakra-ui/react";
import ThemeSwitch from "./ThemeSwitch";
import logo from "./icon.png";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="1rem">
      <Image src={logo} htmlWidth="100px" padding="10px" />
      <ThemeSwitch></ThemeSwitch>
    </HStack>
  );
};

export default NavBar;
