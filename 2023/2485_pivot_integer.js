//2485. Find the Pivot Integer
//https://leetcode.com/problems/find-the-pivot-integer
/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    for (let x = 1; x <= n; x++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let y = 0; y <= x; y++) {
            rightSum += y;
        }

        for (let z = n; z >= x; z--) {
            leftSum += z;
        }

        if (leftSum === rightSum) return x;
    }
    return -1;
};
