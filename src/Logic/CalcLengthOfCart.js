export const calculateLengthOfCart = (cart) => {
  let length = 0;
  cart.map((item) => {
    length += item.quantity;
  });
  return length;
};
