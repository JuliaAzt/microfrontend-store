import { ThemeProvider } from "@mui/material";
import logo from "@/assets/img/logo.svg";
import theme from "shared/Theme";
import { Footer } from "@/components/footer";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Footer logo={<img src={logo} alt="logo" />} />
    </ThemeProvider>
  );
}

export default App;
