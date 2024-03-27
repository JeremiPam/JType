import { HStack, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const GameBar = ({
  placeHolder,
  returnWords,
}: {
  placeHolder: string;
  returnWords: (word: string, time: number) => void;
}) => {
  const [value, setValue] = useState(placeHolder);
  const [fontColor, setFontColor] = useState("grey");
  const [startTime, setStartTime] = useState(0);
  return (
    <>
      <HStack justifyContent="start" padding="0px">
        <Input
          variant="unstyled"
          isInvalid={value !== placeHolder}
          placeholder={placeHolder}
          color={fontColor}
          w={`${placeHolder.length * 10}px`}
          onChange={(val) => {
            if (val.target.value.length === 1 && startTime === 0)
              setStartTime(Date.now);
            if (val.target.value === placeHolder) {
              setFontColor("green");
              const currentTime = Date.now();
              returnWords(val.target.value, (currentTime - startTime) / 1_000);
              setStartTime(0);
            } else if (
              placeHolder.includes(val.target.value) &&
              placeHolder.startsWith(val.target.value)
            ) {
              setFontColor("grey");
            } else {
              setFontColor("red");
            }
            setValue(val.target.value);
          }}
        ></Input>
        <Text textColor="grey">
          {placeHolder.slice(value.length, placeHolder.length)}
        </Text>
      </HStack>
    </>
  );
};

export default GameBar;
