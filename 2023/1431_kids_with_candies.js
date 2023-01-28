//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let candyArray = [];

    for (let x=0; x < candies.length; x++) {
        if (candies[x] + extraCandies >= Math.max(...candies)) {
            candyArray.push(true);
        } else {
            candyArray.push(false);
        }
    }
    return candyArray;
};
