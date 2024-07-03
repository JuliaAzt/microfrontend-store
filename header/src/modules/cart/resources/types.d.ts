interface CartItem {
  id: number;
  quantity: number;
  description: string;
  title: string;
  price: number;
  thumbnail: string;
}

export interface CartState {
  items: CartItem[];
  total: number;
}
