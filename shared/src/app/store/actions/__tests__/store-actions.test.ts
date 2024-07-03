import storeActions from "@/app/store/actions";
import { toggleMenu } from "@/app/store/menu";

import {
  addToCart,
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from "@/app/store/cart";

describe("storeActions", () => {
  it('should return toggleMenu for "TOGGLE_MENU" action', () => {
    expect(storeActions("TOGGLE_MENU")).toBe(toggleMenu);
  });

  it('should return removeItem for "REMOVE_ITEM" action', () => {
    expect(storeActions("REMOVE_ITEM")).toBe(removeItem);
  });

  it('should return incrementQuantity for "INCREMENT_QUANTITY" action', () => {
    expect(storeActions("INCREMENT_QUANTITY")).toBe(incrementQuantity);
  });

  it('should return decrementQuantity for "DECREMENT_QUANTITY" action', () => {
    expect(storeActions("DECREMENT_QUANTITY")).toBe(decrementQuantity);
  });

  it('should return addToCart for "ADD_TO_CART" action', () => {
    expect(storeActions("ADD_TO_CART")).toBe(addToCart);
  });
});
