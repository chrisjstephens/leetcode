//2347. Best Poker Hand
//https://leetcode.com/problems/best-poker-hand
/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    let suitsSet = new Set(suits);
    if (suitsSet.size === 1) {
        return "Flush";
    }

    const ranksMap = new Map();

    let max = 0;
    for (let i = 0; i < ranks.length; i++) {
        ranksMap.set(ranks[i], (ranksMap.get(ranks[i]) || 0) + 1);
        max = Math.max(max, ranksMap.get(ranks[i]));
    }

    if (max >= 3) return "Three of a Kind";
    if (max === 2) return "Pair";
    return "High Card";

};
