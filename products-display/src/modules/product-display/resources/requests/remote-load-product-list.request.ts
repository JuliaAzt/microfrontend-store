import { HttpClient, HttpResponse } from "@/services/http";
import { ProductListResponseType } from "../product.types";

type RemoteLoadProductListResult = Promise<
  HttpResponse<ProductListResponseType>
>;
export type RemoteLoadProductListParams = {
  skip: number;
  limit: number;
};

export interface RemoteLoadProductListType {
  loadAll: (params: RemoteLoadProductListParams) => RemoteLoadProductListResult;
}

export class RemoteLoadProductList implements RemoteLoadProductListType {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient,
  ) {}

  async loadAll({ skip, limit }: RemoteLoadProductListParams) {
    return await this.httpClient.request({
      url: `${this.url}/?limit=${limit}&skip=${skip}&select=title,price,thumbnail,description,id`,
      method: "get",
    });
  }
}
