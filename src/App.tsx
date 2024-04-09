import { useState } from "react";
import "./App.css";
import { Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GameBar from "./components/GameBar/GameBar";
import WordsCategory from "./components/WordsCategory/WordsCategory";

function App() {
  const [resultWords, setResultWords] = useState<string[]>([]);
  const [inputWords, setInputwords] = useState<string[]>([
    "test",
    "test1",
    "test2",
  ]);
  const [wpm, setWpm] = useState<number[]>([]);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main" "footer"`,
          lg: `"nav nav" "main main" "footer footer"`,
        }}
        h="35rem"
        gap="15rem"
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <GridItem area={"main"}>
          <WordsCategory onClick={() => {}}></WordsCategory>
          <HStack justifyContent="center">
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
        <GridItem area={"footer"} textColor={"grey"}>
          Made by Jeremi Pamuła
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
