import { RootState } from "..";

type SelectorsCart = "GET_CART_STATE";

type SelectorsMenu = "GET_MENU_STATE";
export type Selectors = SelectorsCart | SelectorsMenu;

export const storeSelectors = (action: Selectors) => {
  switch (action) {
    case "GET_CART_STATE":
      return (state: RootState) => state.cart;
    case "GET_MENU_STATE":
      return (state: RootState) => state.menu;
  }
};
