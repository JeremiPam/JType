import { useEffect, useState } from "react";
import "./App.css";
import { Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GameBar from "./components/GameBar/GameBar";
import WordsCategory from "./components/WordsCategory/WordsCategory";
import apiClient from "./components/WordsCategory/apiClient";

function App() {
  const [count, setCount] = useState(10);
  const [resultWords, setResultWords] = useState<string[]>([]);
  const [inputWords, setInputwords] = useState<string[]>([]);
  const [wpm, setWpm] = useState<number[]>([]);
  useEffect(() => {
    Promise.all(
      Array.from({ length: count }, () =>
        apiClient.get<{ word: string }>("/words")
      )
    )
      .then((res) => {
        const newWords = res.map((res) => res.data.word);
        setInputwords([...newWords]);
      })
      .catch((err) => console.log(err));
  }, [count]);
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
          <Text padding={"20px"}>
            Choose how many words do you want to type:
          </Text>
          <WordsCategory
            onClick={(count: number) => {
              setCount(count);
            }}
          ></WordsCategory>
          <Text padding={"20px"}>Start typing below!</Text>
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
          <Text padding={"20px"}>
            words per minute:
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
