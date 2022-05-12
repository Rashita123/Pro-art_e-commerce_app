export const CalculateOriginalPriceOfCart = (cart) => {
  let originalPrice = 0;
  cart.map((item) => {
    originalPrice += item.quantity * item.originalPrice;
  });
  return originalPrice;
};
