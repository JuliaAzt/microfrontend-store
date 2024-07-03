import axios, { AxiosError, AxiosResponse } from "axios";
import {
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
  makeAxiosHttpClient,
} from "..";
import { AxiosHttpClient } from "..";
import { Mock } from "vitest";

vi.mock("axios");

describe("AxiosHttpClient", () => {
  let axiosHttpClient: AxiosHttpClient;

  beforeEach(() => {
    axiosHttpClient = new AxiosHttpClient();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should return an instance of AxiosHttpClient", () => {
    const client = makeAxiosHttpClient();
    expect(client).toBeInstanceOf(AxiosHttpClient);
  });

  it("should return the same instance when called multiple times", () => {
    const client1 = makeAxiosHttpClient();
    const client2 = makeAxiosHttpClient();
    expect(client1).toBe(client2);
  });

  it("should return a successful response", async () => {
    const mockResponse = {
      status: 200,
      data: { message: "Success" },
    };
    (axios.request as Mock).mockResolvedValueOnce(
      mockResponse as AxiosResponse
    );

    const request: HttpRequest = {
      url: "https://example.com",
      method: "get",
    };
    const response: HttpResponse = await axiosHttpClient.request(request);

    expect(response.statusCode).toEqual(HttpStatusCode.ok);
    expect(response.body).toEqual({ message: "Success" });
  });

  it("should throw an error when the request fails", async () => {
    const mockError = {
      response: {
        status: 400,
        data: { message: "Bad Request" },
      },
    };
    (axios.request as Mock).mockRejectedValueOnce(
      mockError as AxiosError<{ message: string }>
    );

    const request: HttpRequest = {
      url: "https://example.com",
      method: "get",
    };
    await expect(axiosHttpClient.request(request)).rejects.toThrowError(
      "Bad Request"
    );
  });

  it("should throw an error when the response does not have a message", async () => {
    const mockError = {
      response: {
        status: 400,
        data: {},
      },
    };
    (axios.request as Mock).mockRejectedValueOnce(
      mockError as AxiosError<{ message: string }>
    );

    const request: HttpRequest = {
      url: "https://example.com",
      method: "get",
    };
    await expect(axiosHttpClient.request(request)).rejects.toThrowError(
      "Algo deu errado, tente novamente mais tarde"
    );
  });
});
