//2558. Take Gifts From the Richest Pile
//https://leetcode.com/problems/take-gifts-from-the-richest-pile
/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    for (let x=0; x < k; x++) {
        let maxNum = Math.max(...gifts);
        let index = gifts.indexOf(maxNum);
        let sqRt = Math.floor(Math.sqrt(gifts[index]));
        gifts[index] = sqRt;
    }
    return gifts.reduce((a,b) => a + b, 0);
};
