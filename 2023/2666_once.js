//2666. Allow One Function Call
//https://leetcode.com/problems/allow-one-function-call/
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let count = 0;
    let result = 0;
    return function(...args){
        count++;
        result = fn(...args);
        if(count === 1) return result;
        else
        return undefined;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
