//https://leetcode.com/problems/to-be-or-not-to-be
//2704. To Be Or Not To Be

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (v1) => {
            if (val === v1) return true;
            else throw new Error ("Not Equal");
        },
        notToBe: (v2) => {
            if (val !== v2) return true;
            else throw new Error ("Equal");
        }
    }

};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
