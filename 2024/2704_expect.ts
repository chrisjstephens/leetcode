//2704. To Be Or Not To Be
//https://leetcode.com/problems/to-be-or-not-to-be/
type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (v1: any) => {
            if (val === v1) return true;
            else throw new Error ("Not Equal");
        },
        notToBe: (v2: any) => {
            if (val !== v2) return true;
            else throw new Error ("Equal");
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
