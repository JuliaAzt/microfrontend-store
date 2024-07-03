import { HttpResponse, HttpStatusCode } from "@/services/http";
import { productsMock } from "./products";
import { RemoteLoadProductListType } from "@/modules/product-display/resources";
export class RemoteLoadProductListSpy implements RemoteLoadProductListType {
  callsCount = 0;
  result: HttpResponse = {
    body: productsMock,
    statusCode: HttpStatusCode.ok,
  };

  async loadAll(): Promise<HttpResponse> {
    this.callsCount++;

    return this.result.statusCode !== HttpStatusCode.ok
      ? Promise.reject(this.result)
      : Promise.resolve(this.result);
  }

  constructor(result?: HttpResponse) {
    this.result = result ?? this.result;
  }
}
