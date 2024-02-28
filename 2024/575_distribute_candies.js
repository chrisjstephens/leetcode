//575. Distribute Candies
//https://leetcode.com/problems/distribute-candies
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let candySet = new Set(candyType);

    return candySet.size < candyType.length / 2 ? candySet.size : (candyType.length / 2);
};
