import { makeApiUrl } from "..";

describe("makeApiUrl", () => {
  it("should return the correct url", () => {
    const url = makeApiUrl("test");
    expect(url).toBe("https://dummyjson.com/test");
  });

  it("should return the default url", () => {
    const url = makeApiUrl("");
    expect(url).toBe("https://dummyjson.com/");
  });
});
