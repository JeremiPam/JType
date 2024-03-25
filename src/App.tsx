import { useState } from "react";
import "./App.css";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import GameBar from "./components/GameBar/GameBar";

function App() {
  const [count, setCount] = useState(0);

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
          <GameBar placeHolder="temp" />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
