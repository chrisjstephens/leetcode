//https://leetcode.com/problems/richest-customer-wealth
//1672. Richest Customer Wealth
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let wealth = [];
    for (let x=0; x < accounts.length; x++) {
        let sum = 0;
        for (let val of accounts[x]) {
            sum += val;
        }
        wealth.push(sum);
    }
    return Math.max(...wealth);
};
