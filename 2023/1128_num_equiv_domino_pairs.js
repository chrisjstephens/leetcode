//1128. Number of Equivalent Domino Pairs
//https://leetcode.com/problems/number-of-equivalent-domino-pairs
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    //TODO:Fix, unbelievably slow solution
    let count = 0;
    for (let x=0; x < dominoes.length; x++) {
        for (let y=x+1; y < dominoes.length; y++) {
            let [a, b] = dominoes[x];
            let [c, d] = dominoes[y];

            if((a === c) && (b === d) || (a === d) && (b === c)) {
                count++;
            }
        }
    }
    return count;
};
