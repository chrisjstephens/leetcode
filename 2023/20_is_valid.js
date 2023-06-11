//20. Valid Parentheses
//https://leetcode.com/problems/valid-parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let x=0; x < s.length; x++) {
        if (s[x] === '(') {
            stack.push(')');
        } else if (s[x] === '['){
            stack.push(']');
        } else if (s[x] === '{') {
            stack.push('}');
        } else if (stack.pop() !== s[x]) {
            return false;
        }
    }
    return !stack.length;
};
