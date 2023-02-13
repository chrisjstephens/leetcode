//https://leetcode.com/problems/best-time-to-buy-and-sell-stock
//121. Best Time to Buy and Sell Stock
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minValue = prices[0];
    let profit = 0;

    for (let x=0; x < prices.length; x++) {
        minValue = Math.min(minValue, prices[x]);
        profit = Math.max(profit, prices[x] - minValue);
    }

    return profit;
};
