export const getPercentageOff = (originalPrice, price) => {
  return Math.floor((originalPrice - price) / 100);
};
