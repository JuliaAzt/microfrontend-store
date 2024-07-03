import { renderHook } from "@testing-library/react";
import { useQueryLoadProductList } from "../load-product-list.query";
import { RemoteLoadProductListType } from "../../requests";
import { RemoteLoadProductListSpy } from "@/__mocks__/products";
import { QueryProviderWrapper } from "@/commons/test";
import { faker } from "@faker-js/faker";

const makeSUT = ({
  loadProduct = new RemoteLoadProductListSpy(),
  skip = faker.number.int(),
  limit = faker.number.int(),
}: {
  loadProduct?: RemoteLoadProductListType;
  skip?: number;
  limit?: number;
} = {}) =>
  renderHook(() => useQueryLoadProductList(loadProduct, skip, limit), {
    wrapper: QueryProviderWrapper,
  });
describe("useQueryLoadProduct", () => {
  it("should call loadProduct when params are provided", () => {
    const loadProduct = new RemoteLoadProductListSpy();
    const skip = 10;
    makeSUT({
      loadProduct,
      skip,
    });

    expect(loadProduct.callsCount).toEqual(1);
  });
});
