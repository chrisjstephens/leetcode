//https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time
//1450. Number of Students Doing Homework at a Given Time
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let count = 0;
    for (let x=0; x < startTime.length; x++) {
        if (startTime[x] <= queryTime && endTime[x] >= queryTime) {
            count++;
        }
    }
    return count;
};
