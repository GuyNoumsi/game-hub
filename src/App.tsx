import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // 1024px upward
        }}
      >
        <GridItem area="nav" bg="green">
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="red">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="yellow">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
