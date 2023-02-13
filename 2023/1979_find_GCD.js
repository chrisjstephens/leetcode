//https://leetcode.com/problems/find-greatest-common-divisor-of-array/
//1979. Find Greatest Common Divisor of Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    nums.sort((a,b) => a - b);

    let smallest = nums[0];
    let largest = nums[nums.length-1];

    return gcd_rec(smallest, largest);
};

function gcd_rec(a, b) {
    if (b) {
        return gcd_rec(b, a % b);
    } else {
        return Math.abs(a);
    }
}
