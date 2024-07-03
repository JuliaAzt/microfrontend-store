const BASE_URL =
  process.env.REACT_APP_BASE_URL_API || process.env.VITE_BASE_URL_API;

export const makeApiUrl = (path: string): string => `${BASE_URL}${path}`;
