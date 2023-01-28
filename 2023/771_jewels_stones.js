//https://leetcode.com/problems/jewels-and-stones
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for (let x=0; x < jewels.length; x++) {
        for (let y=0; y < stones.length; y++) {
            if (jewels[x] === stones[y]) count++;
        }
    }
    return count;
};
