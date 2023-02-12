//https://leetcode.com/problems/robot-return-to-origin
//657. Robot Return to Origin
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let currentLocation = [0,0];

    for (let x=0; x<moves.length; x++) {
        if (moves[x] === 'U') {
            currentLocation[1]++;
        } else if (moves[x] === 'D') {
            currentLocation[1]--;
        } else if (moves[x] === 'L') {
            currentLocation[0]--;
        } else if (moves[x] === 'R') {
            currentLocation[0]++;
        }
    }

    return currentLocation[0] === 0 && currentLocation[1] === 0;
};
