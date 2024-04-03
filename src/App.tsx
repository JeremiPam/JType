import { useState } from "react";
import "./App.css";
import { Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GameBar from "./components/GameBar/GameBar";

function App() {
  const [resultWords, setResultWords] = useState<string[]>([]);
  const [inputWords, setInputwords] = useState<string[]>(["asdasd", "nbbbb"]);
  const [wpm, setWpm] = useState<number[]>([]);
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "main main"` }}
        h="35rem"
        gap="15rem"
      >
        <GridItem area={"nav"} bg="#f5f50a" borderRadius="25px">
          <NavBar />
        </GridItem>
        <GridItem area={"main"}>
          <HStack>
            <Text>{resultWords.join(" ")}</Text>
            <GameBar
              wordsArray={inputWords}
              returnWords={(word: string, seconds: number) => {
                setResultWords([...resultWords, word]);
                setWpm([...wpm, seconds]);
              }}
              currentWord={inputWords[0]}
            />
          </HStack>
          <Text>
            Wpm:
            {wpm.length !== 0
              ? (60 / (wpm.reduce((a, b) => a + b) / wpm.length)).toFixed(2)
              : ""}
          </Text>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
