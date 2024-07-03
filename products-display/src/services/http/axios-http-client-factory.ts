/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosResponse } from "axios";

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  body?: any;
  headers?: any;
};

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>;
}

type HttpMethod = "post" | "get" | "put" | "patch" | "delete";

export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  conflict = 409,
  preconditionFailed = 412,
  serverError = 500,
}

export type HttpResultError = Error & { message: string };

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  body?: T;
};

export class AxiosHttpClient implements HttpClient {
  static instance: AxiosHttpClient;

  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch (error) {
      const _error = error as AxiosError<{ message: string }>;
      const dataError = _error?.response?.data;

      throw new Error(
        (dataError?.message || _error?.message) ??
          "Algo deu errado, tente novamente mais tarde",
      );
    }

    return {
      statusCode: axiosResponse?.status,
      body: axiosResponse?.data,
    };
  }

  static getInstance() {
    if (!AxiosHttpClient.instance) {
      AxiosHttpClient.instance = new AxiosHttpClient();
    }

    return AxiosHttpClient.instance;
  }
}

export const makeAxiosHttpClient = (): AxiosHttpClient =>
  AxiosHttpClient.getInstance();
