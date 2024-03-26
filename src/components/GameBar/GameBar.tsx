import { HStack, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const GameBar = ({
  placeHolder,
  returnWords,
}: {
  placeHolder: string;
  returnWords: (word: string) => void;
}) => {
  const [value, setValue] = useState(placeHolder);
  const [fontColor, setFontColor] = useState("grey");
  return (
    <>
      <Text textColor="grey">just start typing!</Text>
      <HStack justifyContent="start" padding="0px">
        <Input
          variant="unstyled"
          isInvalid={value !== placeHolder}
          placeholder={placeHolder}
          color={fontColor}
          w={`${placeHolder.length * 10}px`}
          onChange={(val) => {
            if (val.target.value === placeHolder) {
              setFontColor("green");
              returnWords(val.target.value);
            } else setFontColor("grey");
            setValue(val.target.value);
          }} //jakby zrobic 2 inputy, w pierwszym dac tyle charow ile jest w slowie napisanym przez usera a w drugim dac reszte jako placeholder?
        ></Input>
        <Text textColor="grey">
          {placeHolder.slice(value.length, placeHolder.length)}
        </Text>
      </HStack>
    </>
  );
};

export default GameBar;
