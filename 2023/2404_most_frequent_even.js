//2404. Most Frequent Even Element
//https://leetcode.com/problems/most-frequent-even-element
/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let evenElements = [];
    let numberMap = new Map();

    for (let x=0; x < nums.length; x++) {
        if (nums[x] % 2 === 0)
        evenElements.push(nums[x]);
    }

    if (evenElements.length === 0) return -1;
    evenElements.sort((a,b) => a - b);

    for (let x=0; x < evenElements.length; x++) {
        if (numberMap.has(evenElements[x])) {
            numberMap.set(evenElements[x], numberMap.get(evenElements[x]) + 1);
        }   else {
            numberMap.set(evenElements[x], 1);
        }
    }

    let returnVal = [...numberMap].sort((a,b) => b[1] - a[1] || a[0] - b[0]);

    return returnVal[0][0];
};
