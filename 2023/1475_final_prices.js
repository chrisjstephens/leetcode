//https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop
//1475. Final Prices With a Special Discount in a Shop
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
  let newPrices = [];
  let added = false;
  for (let x=0; x < prices.length; x++) {
    added = false;
      for (let y=x+1; y < prices.length; y++) {
          if (prices[y] <= prices[x]) {
              newPrices.push(prices[x] - prices[y]);
              y = prices.length;
              added = true;
          }
      }
      if (!added) newPrices.push(prices[x]);
  }
  return newPrices;
};
