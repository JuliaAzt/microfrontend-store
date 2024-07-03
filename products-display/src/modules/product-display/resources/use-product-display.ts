import { useState } from "react";
import { useDispatch } from "react-redux";
import storeActions from "shared/StoreActions";
import { ProductType } from "./product.types";
import { ProductDisplayProps } from "../product-display.view";
import { useQueryLoadProductList } from ".";

type CartItem = Omit<ProductType, "price"> & { price: string };

const pageSize = 12;

export const useProductDisplay = ({ loadProducts }: ProductDisplayProps) => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const onAddToCart = (valueCard: CartItem) => {
    const action = storeActions("ADD_TO_CART");
    dispatch(action(valueCard));
    dispatch(storeActions("TOGGLE_MENU")());
  };

  const { data, isLoading } = useQueryLoadProductList(
    loadProducts,
    pageSize * (page - 1),
    pageSize
  );

  const maxPages = Math.round(data.total / pageSize) || 1;

  return {
    maxPages,
    page,
    setPage,
    data,
    isLoading,
    onAddToCart,
  };
};
