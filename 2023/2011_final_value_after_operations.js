//https://leetcode.com/problems/final-value-of-variable-after-performing-operations
//2011. Final Value of Variable After Performing Operations
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let ctr = 0;
    for (let x=0; x < operations.length; x++ ) {
        if (operations[x].includes('--')){
            ctr--;
        }   else if (operations[x].includes('++')) {
            ctr++;
        }
    }
    return ctr;
};
