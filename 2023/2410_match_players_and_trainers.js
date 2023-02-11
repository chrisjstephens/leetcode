//https://leetcode.com/problems/maximum-matching-of-players-with-trainers
//2410. Maximum Matching of Players With Trainers
/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a,b) => a - b);
    trainers.sort((a,b) => a - b);

    let count = 0;
    let y = 0;
    let z = 0;

    while (y < players.length && z < trainers.length) {
        if (players[y] <= trainers[z]) {
            count++;
            y++;
            z++;
        } else {
            z++;
        }
    }

    return count;
};
