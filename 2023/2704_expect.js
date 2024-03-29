//https://leetcode.com/problems/to-be-or-not-to-be/submissions/
//2704. To Be Or Not To Be
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (val2) => {
            if (val !== val2) {
                throw new Error("Not Equal");
            } else {
                return true;
            }
        },
        notToBe: (val2) => {
            if (val === val2) {
                throw new Error("Equal");
            } else {
                return true;
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
