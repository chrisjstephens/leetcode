//https://leetcode.com/problems/arranging-coins
//441. Arranging Coins
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let stairs = 1;
    let num = n;

    while (num >= stairs) {
        num -= stairs;
        stairs++;
    }

    return stairs - 1;
};
