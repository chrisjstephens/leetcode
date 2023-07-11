//1952. Three Divisors
//https://leetcode.com/problems/three-divisors
/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let count = 0;

    for (let x = 0; x <= n; x++) {
        if (n % x === 0) count++;
    }

    return count === 3 ? true : false;
};
