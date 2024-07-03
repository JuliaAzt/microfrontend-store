import { priceMask } from "@/commons/helpers";

describe("priceMask", () => {
  it("should return a string with the correct formatting for a positive number", () => {
    const result = priceMask(123.45);
    expect(result).toBe("R$ 123,45");
  });

  it("should return a string with the correct formatting for a negative number", () => {
    const result = priceMask(-123.45);
    expect(result).toBe("-R$ 123,45");
  });

  it("should return a string with the correct formatting for a zero value", () => {
    const result = priceMask(0);
    expect(result).toBe("R$ 0,00");
  });

  it("should return an empty string for an undefined value", () => {
    const result = priceMask("10.12");
    expect(result).toBe("R$ 10,12");
  });

  it("should return a string with the correct formatting for a number with a large number of decimal places", () => {
    const result = priceMask(123.456789);
    expect(result).toBe("R$ 123,46");
  });
});
