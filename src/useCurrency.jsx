const intl = new Intl.NumberFormat("en-EU", {
  style: "currency",
  currency: "EUR",
});

export const priceConverter = (price) => intl.format(price);

export default function useCurrency(price) {
  return priceConverter(price);
}
