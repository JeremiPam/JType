import { useState } from "react";
import "./App.css";
import { Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GameBar from "./components/GameBar/GameBar";

function App() {
  const [words, setWords] = useState<string[]>([]);
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
            <Text>{words.join(" ")}</Text>
            <GameBar
              placeHolder="temp"
              returnWords={(word: string, seconds: number) => {
                setWords([...words, word]);
                setWpm([...wpm, seconds]);
              }}
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
