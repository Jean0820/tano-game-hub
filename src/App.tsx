import { Grid, GridItem } from "@chakra-ui/react";
import GridGame from "./components/GridGame";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem
        area="aside"
        bg="gold"
        display={{ base: "none", lg: "block" }}
      ></GridItem>
      <GridItem area="main" bg="dodgerblue">
        <GridGame />
      </GridItem>
    </Grid>
  );
}

export default App;
