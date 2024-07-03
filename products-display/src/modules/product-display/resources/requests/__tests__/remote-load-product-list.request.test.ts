import {
  RemoteLoadProductList,
  RemoteLoadProductListParams,
} from "../remote-load-product-list.request";
import { HttpClientSpy } from "@/__mocks__/http";

const makeSut = (
  url = "http://localhost:3002",
  params: RemoteLoadProductListParams = {
    skip: 10,
    limit: 10,
  }
) => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new RemoteLoadProductList(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
    params,
  };
};

describe("RemoteLoadProduct", () => {
  describe("successful response", () => {
    it("should call HttpClient with correct values", async () => {
      const url = "http://localhost:3002";
      const { sut, httpClientSpy, params } = makeSut(url);

      await sut.loadAll(params);

      expect(httpClientSpy.url).toBe(
        `${url}/?limit=${params.limit}&skip=${params.skip}&select=title,price,thumbnail,description,id`
      );
      expect(httpClientSpy.method).toBe("get");
    });
  });
});
