export const priceMask = (value: number | string) =>
  parseFloat(String(value)).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
