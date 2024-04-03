import { HStack, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const GameBar = ({
  wordsArray,
  returnWords,
  currentWord = wordsArray[0],
}: {
  wordsArray: string[];
  returnWords: (word: string, time: number) => void;
  currentWord: string;
}) => {
  const [value, setValue] = useState(currentWord);
  const [fontColor, setFontColor] = useState("grey");
  const [startTime, setStartTime] = useState(0);
  return (
    <>
      <HStack justifyContent="start" padding="0px">
        <Input
          variant="unstyled"
          placeholder={currentWord}
          color={fontColor}
          isDisabled={typeof currentWord === "undefined"}
          w={`${
            typeof currentWord === "string" ? currentWord.length * 10 : 10
          }px`}
          onChange={(val) => {
            if (val.target.value.length === 1 && startTime === 0)
              setStartTime(Date.now);
            if (val.target.value === currentWord) {
              setFontColor("green");
              const currentTime = Date.now();
              returnWords(val.target.value, (currentTime - startTime) / 1_000);
              setStartTime(0);
              val.target.value = "";
              setValue(wordsArray.shift() || "");
            } else if (
              currentWord.includes(val.target.value) &&
              currentWord.startsWith(val.target.value)
            ) {
              setFontColor("grey");
            } else {
              setFontColor("red");
            }
            setValue(val.target.value);
          }}
        ></Input>
        <Text textColor="grey">
          {typeof currentWord === "string" && typeof value === "string"
            ? currentWord.slice(value.length, currentWord.length)
            : ""}
        </Text>
      </HStack>
    </>
  );
};

export default GameBar;
