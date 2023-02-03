//https://leetcode.com/problems/add-to-array-form-of-integer
//989. Add to Array-Form of Integer
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
   let charNumber = num.join('');
   let arrayVal = (BigInt(charNumber) + BigInt(k)).toString();
   return [ ...arrayVal ];
};
