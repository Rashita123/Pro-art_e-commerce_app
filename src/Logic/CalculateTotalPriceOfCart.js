export const CalculateTotalPriceOfCart = (cart) => {
  let price = 0;
  cart.map((item) => {
    price += item.quantity * item.price;
  });
  return price;
};
