//https://leetcode.com/problems/count-items-matching-a-rule
//1773. Count Items Matching a Rule
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    for (let x=0; x < items.length; x++) {
        let y = 0;
        for (let char of items[x]) {
            if (ruleKey === 'type' && y === 0) {
                if (char === ruleValue) count++;
            } else if (ruleKey === 'color' && y === 1) {
                if (char === ruleValue) count++;
            } else if (ruleKey === 'name' && y === 2) {
                if (char === ruleValue) count++;
            }
        y++;
        }
    }
    return count;
};
