//1346. Check If N and Its Double Exist
//https://leetcode.com/problems/check-if-n-and-its-double-exist
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let count = 0;

    for (let x = 0; x < arr.length; x++) {
      for (let y = 0; y < arr.length; y++) {
        if (arr[x] === 2 * arr[y] && x != y) return true;
      }
    }
    return false;
};
