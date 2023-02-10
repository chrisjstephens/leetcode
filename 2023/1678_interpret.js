//https://leetcode.com/problems/goal-parser-interpretation
//1678. Goal Parser Interpretation
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let newCommand = command;
    newCommand = newCommand.replaceAll('(al)','al');
    newCommand = newCommand.replaceAll('()', 'o');
    return newCommand;
};
