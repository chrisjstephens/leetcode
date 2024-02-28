//575. Distribute Candies
//https://leetcode.com/problems/distribute-candies
function distributeCandies(candyType: number[]): number {
    let candySet = new Set(candyType);

    return candySet.size < candyType.length / 2 ? candySet.size : (candyType.length / 2);
};
