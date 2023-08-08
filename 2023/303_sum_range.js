//https://leetcode.com/problems/range-sum-query-immutable
//303. Range Sum Query - Immutable
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.val = nums;
    return null;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let slicedNums = this.val.slice(left, right+1);
    return slicedNums.reduce((a,b) => a + b);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
