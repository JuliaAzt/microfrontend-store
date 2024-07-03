import { RootState } from "../..";
import storeSelectors from "@/app/store/selectors";
import { Selectors } from "../store-selectors";

describe("storeSelectors", () => {
  it("should return the cart state selector for GET_CART_STATE action", () => {
    const action: Selectors = "GET_CART_STATE";
    const state: RootState = {
      cart: {
        items: [],
        total: 0,
      },
      menu: {
        isOpen: false,
      },
    };

    const selector = storeSelectors(action);
    const result = selector(state);

    expect(result).toEqual(state.cart);
  });

  it("should return the menu state selector for GET_MENU_STATE action", () => {
    const action: Selectors = "GET_MENU_STATE";
    const state: RootState = {
      cart: {
        items: [],
        total: 0,
      },
      menu: {
        isOpen: false,
      },
    };

    const selector = storeSelectors(action);
    const result = selector(state);

    expect(result).toEqual(state.menu);
  });
});
