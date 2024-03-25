import { HStack, Input, Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import { useState } from "react";

const GameBar = ({ placeHolder }: { placeHolder: string }) => {
  const [value, setValue] = useState(placeHolder);
  const [fontColor, setFontColor] = useState("grey.100");
  return (
    <>
      <Text textColor="grey">just start typing!</Text>
      <HStack justifyContent="center">
        <Input
          variant="unstyled"
          placeholder={placeHolder}
          isInvalid={value !== placeHolder}
          color={fontColor}
          onChange={(val) => {
            if (val.target.value === placeHolder) setFontColor("green.500");
            else setFontColor("grey.100");
            setValue(val.target.value);
          }}
        ></Input>
      </HStack>
    </>
  );
};

export default GameBar;
