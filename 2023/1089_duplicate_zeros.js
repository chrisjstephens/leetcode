//1089. Duplicate Zeros
//https://leetcode.com/problems/duplicate-zeros
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    for (let x=0; x < arr.length; x++) {

        if (arr[x] === 0) {
            arr.splice(x, 0, 0);
            arr.pop();
            x++;
        }

    }
    return arr;
};
