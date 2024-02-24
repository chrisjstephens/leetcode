//https://leetcode.com/problems/account-balance-after-rounded-purchase/
//2806. Account Balance After Rounded Purchase
/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function(purchaseAmount) {
    return 100 - Math.round(purchaseAmount / 10 ) * 10
};
