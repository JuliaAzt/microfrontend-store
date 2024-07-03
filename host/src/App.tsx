import { Box } from "@mui/material";

import Header from "menu/Header";
import Footer from "footer/Footer";
import ProductDisplay from "main/ProductDisplay";

function App() {
  return (
    <Box
      display="grid"
      gridArea="wrapper"
      gridTemplateAreas="'header' 'main' 'footer'"
      gridTemplateRows="auto 1fr auto"
      height="100vh"
    >
      <Box display="grid" gridArea="header" component="header">
        <Header />
      </Box>

      <Box
        gridArea="main"
        component="main"
        py="24px"
        px={{ xs: "0", md: "24px" }}
        data-testid="box-component"
        bgcolor="grey.50"
      >
        <ProductDisplay />
      </Box>

      <Box display="grid" gridArea="footer" component="footer">
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
