import { menuReducer, toggleMenu } from "../menu";

describe("menuSlice", () => {
  const initialState = {
    isOpen: false,
  };

  it("should handle initial state", () => {
    expect(menuReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle toggleMenu when menu is initially closed", () => {
    const actual = menuReducer(initialState, toggleMenu());
    expect(actual.isOpen).toBe(true);
  });

  it("should handle toggleMenu when menu is initially open", () => {
    const state = {
      isOpen: true,
    };
    const actual = menuReducer(state, toggleMenu());
    expect(actual.isOpen).toBe(false);
  });
});
