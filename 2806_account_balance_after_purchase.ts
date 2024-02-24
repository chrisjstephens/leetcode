//https://leetcode.com/problems/account-balance-after-rounded-purchase/
//2806. Account Balance After Rounded Purchase

function accountBalanceAfterPurchase(purchaseAmount: number): number {
     return 100 - Math.round(purchaseAmount / 10 ) * 10
};
