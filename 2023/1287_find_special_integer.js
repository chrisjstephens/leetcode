//https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let intMap = new Map();
    for (let x=0; x < arr.length; x++) {
        if (!intMap.get(arr[x])) {
            intMap.set(arr[x], 1)
        } else {
            intMap.set(arr[x], intMap.get(arr[x]) + 1);
        }
    }
    let sortArray = [...intMap];
    sortArray.sort((a,b) => b[1] - a[1]);

    return sortArray[0][0];
};
