//https://leetcode.com/problems/crawler-log-folder
//1598. Crawler Log Folder
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let currentLevel = 0;
    for (let x=0; x < logs.length; x++) {
        if (logs[x].startsWith('..')) {
            if(currentLevel >0) currentLevel--;
        } else if (!logs[x].startsWith('.')) {
            currentLevel++;
        }
    }
    return currentLevel;
};
