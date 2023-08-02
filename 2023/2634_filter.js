//2634. Filter Elements from Array
//https://leetcode.com/problems/filter-elements-from-array
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filterArray = [];
    for (let x = 0; x < arr.length; x++) {
        if (fn(arr[x], x)) filterArray.push(arr[x]);
    }
    return filterArray
};
