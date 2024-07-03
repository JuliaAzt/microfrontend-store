import { makeApiUrl, makeAxiosHttpClient } from "@/services/http";
import { RemoteLoadProductList } from "..";

export const makeRemoteLoadProductList = () =>
  new RemoteLoadProductList(makeApiUrl("/products"), makeAxiosHttpClient());
