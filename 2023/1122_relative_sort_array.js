//https://leetcode.com/problems/relative-sort-array
/**
 * @param {number[]} arr1
 * @param {number[]} arr2 distinct
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
   let matchMap = [];
   let nonMatchMap = [];

    for (let x=0; x < arr2.length; x++) {
        for (let y=0; y < arr1.length; y++) {
            if (arr2[x] === arr1[y]) {
                matchMap.push(arr1[y]);
            }
        }
    }

    for (let x=0; x < arr1.length; x++) {
        if (!arr2.includes(arr1[x]))   nonMatchMap.push(arr1[x]);
    }
    nonMatchMap = nonMatchMap.sort((a,b) => a - b)

    return [...matchMap, ...nonMatchMap];
};
