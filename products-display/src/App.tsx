import store from "shared/Store";
import theme from "shared/Theme";

import { ProductDisplay } from "./modules/product-display";
import { makeRemoteLoadProductList } from "./modules/product-display/resources";
import Providers from "./app/providers";

function App() {
  return (
    <>
      <Providers theme={theme} store={store}>
        <ProductDisplay loadProducts={makeRemoteLoadProductList()} />
      </Providers>
    </>
  );
}

export default App;
