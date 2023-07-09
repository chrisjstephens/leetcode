//2562. Find the Array Concatenation Value
//https://leetcode.com/problems/find-the-array-concatenation-value
/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let sum = 0;

    while (nums.length != 0) {
        const first = nums.shift();
        const last = nums.pop();

        let temp = first?.toString() + last?.toString();
        sum += parseInt(temp);
    }
    return sum;
};
