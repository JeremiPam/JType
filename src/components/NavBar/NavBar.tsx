import { HStack, Image } from "@chakra-ui/react";
import ThemeSwitch from "./ThemeSwitch";
import logo from "./icon.png";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} htmlHeight="60px" htmlWidth="100px" />
      <ThemeSwitch></ThemeSwitch>
    </HStack>
  );
};

export default NavBar;
