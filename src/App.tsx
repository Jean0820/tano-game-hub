import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
function App() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchTerm) => setSearchTerm(searchTerm)} />
      </GridItem>
      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        paddingX={5}
      >
        <GenreList
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>
      <GridItem area="main" paddingX={"10px"}>
        <GameHeading
          title={
            selectedGenre && selectedPlatform
              ? `${selectedPlatform} ${selectedGenre}`
              : selectedGenre
              ? `${selectedGenre}`
              : selectedPlatform
              ? selectedPlatform
              : ""
          }
        />
        <HStack gap={5} paddingY={5}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <SortSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
        </HStack>
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
          searchTerm={searchTerm}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
