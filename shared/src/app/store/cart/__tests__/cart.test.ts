import {
  addToCart,
  cartReducer,
  decrementQuantity,
  incrementQuantity,
  removeItem,
  setCart,
} from "../cart";

describe("cartSlice", () => {
  const initialState = {
    items: [],
    total: 0,
  };

  it("should handle initial state", () => {
    expect(cartReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle setCart", () => {
    const newState = {
      items: [
        {
          id: 1,
          quantity: 2,
          description: "desc",
          title: "title",
          price: 100,
          thumbnail: "thumb",
        },
      ],
      total: 2,
    };
    const actual = cartReducer(initialState, setCart(newState));
    expect(actual).toEqual(newState);
  });

  it("should handle addToCart", () => {
    const item = {
      id: 1,
      description: "desc",
      title: "title",
      price: 100,
      thumbnail: "thumb",
    };
    let actual = cartReducer(initialState, addToCart(item));
    expect(actual.items.length).toBe(1);
    expect(actual.items[0].quantity).toBe(1);
    expect(actual.total).toBe(1);

    actual = cartReducer(actual, addToCart(item));
    expect(actual.items[0].quantity).toBe(2);
    expect(actual.total).toBe(2);
  });

  it("should handle incrementQuantity", () => {
    const item = {
      id: 1,
      quantity: 1,
      description: "desc",
      title: "title",
      price: 100,
      thumbnail: "thumb",
    };
    const state = { items: [item], total: 1 };
    const actual = cartReducer(state, incrementQuantity(item.id));
    expect(actual.items[0].quantity).toBe(2);
  });

  it("should handle decrementQuantity", () => {
    const item = {
      id: 1,
      quantity: 2,
      description: "desc",
      title: "title",
      price: 100,
      thumbnail: "thumb",
    };
    const state = { items: [item], total: 2 };
    const actual = cartReducer(state, decrementQuantity(item.id));
    expect(actual.items[0].quantity).toBe(1);
    expect(actual.total).toBe(1);

    const newState = cartReducer(actual, decrementQuantity(item.id));
    expect(newState.items[0].quantity).toBe(0);
    expect(newState.total).toBe(0);
  });

  it("should handle removeItem", () => {
    const item1 = {
      id: 1,
      quantity: 1,
      description: "desc1",
      title: "title1",
      price: 100,
      thumbnail: "thumb1",
    };
    const item2 = {
      id: 2,
      quantity: 1,
      description: "desc2",
      title: "title2",
      price: 200,
      thumbnail: "thumb2",
    };
    const state = { items: [item1, item2], total: 2 };
    const actual = cartReducer(state, removeItem(item1.id));
    expect(actual.items.length).toBe(1);
    expect(actual.items[0].id).toBe(2);
  });
});
