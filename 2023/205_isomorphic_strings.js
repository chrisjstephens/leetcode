//https://leetcode.com/problems/isomorphic-strings
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length != t.length) return false;

    let isoMap = new Map();
    let isoSet = new Set();

    for (let x=0; x < s.length; x++) {
        let firstChar = s[x];
        let secondChar = t[x];
        //console.log('x', x);
        if (!isoMap.has(firstChar) && !isoSet.has(secondChar)) {
            isoMap.set(firstChar, secondChar);
            isoSet.add(secondChar);
        } else if (isoMap.has(firstChar)) {
            //console.log('has char', firstChar, secondChar);
            if (!(isoMap.get(firstChar) === secondChar)) return false;
        } else if (isoSet.has(secondChar)) {
            return false
        }
    }

    //console.log('isoMap', isoMap.entries());
    //console.log('isoSet', isoSet.entries());
    return true;
};
