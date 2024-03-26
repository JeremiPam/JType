import { useState } from "react";
import "./App.css";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GameBar from "./components/GameBar/GameBar";

function App() {
  const [words, setWords] = useState<string[]>([]);

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
          <GameBar
            placeHolder="temp"
            returnWords={(word: string) => {
              setWords([...words, word]);
            }}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
