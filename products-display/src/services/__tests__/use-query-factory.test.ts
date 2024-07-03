import { renderHook, waitFor } from "@testing-library/react";
import { useQuery } from "../use-query-factory";
import { QueryProviderWrapper as queryWrapper } from "../../commons/test";

describe("useQuery", () => {
  it("should return the correct data", async () => {
    const mockData = { test: "mock data" };
    const { result } = renderHook(
      () =>
        useQuery({
          enabled: true,
          queryKey: ["key"],
          queryFn: () =>
            Promise.resolve({ body: { test: "mock data" }, statusCode: 200 }),
        }),
      {
        wrapper: queryWrapper,
      }
    );
    await waitFor(() => {
      expect(result.current.data).toEqual(mockData);
    });
  });

  it('should return isLoading as true when fetchStatus is not "idle"', () => {
    const { result } = renderHook(
      () =>
        useQuery({
          enabled: true,
          queryKey: ["key"],
          queryFn: () => Promise.resolve({ body: {}, statusCode: 200 }),
        }),
      {
        wrapper: queryWrapper,
      }
    );

    expect(result.current.isLoading).toBe(true);
  });

  it('should return isLoading as false when fetchStatus is "idle"', async () => {
    const { result } = renderHook(
      () =>
        useQuery({
          enabled: true,
          queryKey: ["key"],
          queryFn: () => Promise.resolve({ body: {}, statusCode: 200 }),
        }),
      {
        wrapper: queryWrapper,
      }
    );

    result.current.refetch();
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
  });

  it("should return isError as false when error is not present", async () => {
    const { result } = renderHook(
      () =>
        useQuery({
          enabled: true,
          queryKey: ["key"],
          queryFn: () => Promise.resolve({ body: {}, statusCode: 200 }),
        }),
      {
        wrapper: queryWrapper,
      }
    );

    await waitFor(() => {
      expect(result.current.isError).toBe(false);
    });
  });
});
