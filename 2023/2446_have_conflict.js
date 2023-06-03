//2446. Determine if Two Events Have Conflict
//https://leetcode.com/problems/determine-if-two-events-have-conflict
/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
    if (event1[1] < event2[0]) return false;
    if (event2[0] <= event1[1] && event2[1] >= event1[0]) return true;
    return false;
};
