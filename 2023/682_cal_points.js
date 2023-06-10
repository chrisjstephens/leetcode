//682. Baseball Game
//https://leetcode.com/problems/baseball-game
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let currentScore = 0;
    let scores = [];
    for (let x=0; x < operations.length; x++) {
        let currentVal = operations[x];
        let validNumber = !isNaN(currentVal);

        if (validNumber) {
            scores.push(Number(currentVal));
        } else {
            if (currentVal === 'C') {
                scores.pop();
            } else if (currentVal === 'D'){
                let tempNum = Number(scores[scores.length - 1] * 2);
                scores.push(tempNum);
            } else {
                let tempSum = scores[scores.length - 1] + scores[scores.length - 2];
                scores.push(tempSum);
            }
        }
    }

    return scores.reduce((a,b) => a + b, 0);
};
