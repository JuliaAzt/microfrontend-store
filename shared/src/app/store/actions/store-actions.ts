import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../cart";
import { toggleMenu } from "../menu";

type ActionsCart =
  | "ADD_TO_CART"
  | "INCREMENT_QUANTITY"
  | "DECREMENT_QUANTITY"
  | "REMOVE_ITEM";

type ActionMenu = "TOGGLE_MENU";
type Action = ActionsCart | ActionMenu;

export const storeActions = (action: Action) => {
  switch (action) {
    case "TOGGLE_MENU":
      return toggleMenu;
    case "REMOVE_ITEM":
      return removeItem;
    case "INCREMENT_QUANTITY":
      return incrementQuantity;
    case "DECREMENT_QUANTITY":
      return decrementQuantity;
    case "ADD_TO_CART":
      return addToCart;
  }
};
