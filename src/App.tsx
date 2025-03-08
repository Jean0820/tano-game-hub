import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GridMovie from "./components/GridMovie";
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
      <GridItem area="main" bg="">
        <GridMovie />
      </GridItem>
    </Grid>
  );
}

export default App;
