//2660. Determine the Winner of a Bowling Game
//https://leetcode.com/problems/determine-the-winner-of-a-bowling-game
/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    let previousTwoScores = [];
    let playerOneScore = 0, playerTwoScore = 0

    for (let x = 0; x < player1.length; x++) {
        if (previousTwoScores.includes(10)) {
            playerOneScore += 2 * player1[x];
        } else {
            playerOneScore += player1[x];
        }

        if (previousTwoScores.length === 2) {
            previousTwoScores.shift();
            previousTwoScores.push(player1[x]);
        } else {
            previousTwoScores.push(player1[x]);
        }
    }

    previousTwoScores = [];

    for (let y = 0; y < player2.length; y++) {
        if (previousTwoScores.includes(10)) {
            playerTwoScore += 2 * player2[y];
        } else {
            playerTwoScore += player2[y];
        }

        if (previousTwoScores.length === 2) {
            previousTwoScores.shift();
            previousTwoScores.push(player2[y]);
        } else {
            previousTwoScores.push(player2[y]);
        }
    }

    if (playerOneScore > playerTwoScore) {
        return 1;
    }   else if (playerTwoScore > playerOneScore) {
        return 2;
    }   else {
        return 0;
    }
};
