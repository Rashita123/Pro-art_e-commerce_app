export const CalcOriginalPriceOfCart = (cart) => {
  let originalPrice = 0;
  cart.map((item) => {
    originalPrice += item.quantity * item.originalPrice;
  });
  return originalPrice;
};

export const CalcTotalPriceOfCart = (cart) => {
  let price = 0;
  cart.map((item) => {
    price += item.quantity * item.price;
  });
  return price;
};
