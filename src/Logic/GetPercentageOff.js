export const GetPercentageOff = (originalPrice, price) => {
  return Math.floor((originalPrice - price) / 100);
};
