import { Switch, useColorMode } from "@chakra-ui/react";

const ThemeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
    </>
  );
};

export default ThemeSwitch;
