import store from "shared/Store";
import theme from "shared/Theme";

import { Menu } from "@/modules/menu";
import Providers from "@/app/providers";

function App() {
  return (
    <>
      <Providers theme={theme} store={store}>
        <Menu />
      </Providers>
    </>
  );
}

export default App;
