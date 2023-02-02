//https://leetcode.com/problems/unique-number-of-occurrences
//1207. Unique Number of Occurrences
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = {}

    for (let x of arr) {
        if(map[x]) {
            map[x] += 1;
        } else {
            map[x] = 1;
        }
    }

    const occurencesObj = Object.values(map);
    const occurencesSet = new Set(occurencesObj);

    return occurencesObj.length === occurencesSet.size;
};
