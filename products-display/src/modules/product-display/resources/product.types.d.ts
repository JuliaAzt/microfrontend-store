export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

export type ProductListResponseType = {
  total: number;
  skip: number;
  limit: number;
  products: ProductType[];
};
