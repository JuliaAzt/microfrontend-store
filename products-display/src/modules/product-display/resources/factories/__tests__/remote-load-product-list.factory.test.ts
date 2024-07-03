import { makeRemoteLoadProductList } from "..";
import { RemoteLoadProductList } from "../../requests";

const makeSut = () => {
  const output = makeRemoteLoadProductList();

  return {
    output,
  };
};

describe("RemoteLoadProductList", () => {
  it("should return RemoteLoadProduct instance", () => {
    const { output } = makeSut();

    expect(output).toBeInstanceOf(RemoteLoadProductList);
  });
});
