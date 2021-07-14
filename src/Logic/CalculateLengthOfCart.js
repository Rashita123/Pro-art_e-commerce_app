export const CalculateLengthOfCart = (cart) => {
  let length = 0;
  cart.map((item) => {
    length += item.quantity;
  });
  return length;
};
