//https://leetcode.com/problems/student-attendance-record-i
//551. Student Attendance Record I
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absentCount = 0;
    let lateCount = 0;
    for (let x = 0; x < s.length; x++) {
        if (s[x] === 'A') {
            absentCount++;
            lateCount = 0;
        } else if (s[x] === 'L') {
            lateCount++;
        } else {
            lateCount = 0;
        }
        if (lateCount === 3 || absentCount === 2) return false
    }
    return true;
};
