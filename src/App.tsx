import { useState } from "react";
import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import ThemeSwitch from "./components/NavBar/ThemeSwitch";
import NavBar from "./components/NavBar/NavBar";
import GameBar from "./components/GameBar/GameBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "main main"` }}
        h="40rem"
      >
        <GridItem area={"nav"}>
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
