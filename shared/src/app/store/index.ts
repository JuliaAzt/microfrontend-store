import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./menu";
import { cartReducer } from "./cart";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
  },

  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
