//https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary
//1491. Average Salary Excluding the Minimum and Maximum Salary
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let average = 0;
    let count = 0;
    salary.sort((a,b) => a - b);

    let salLength = salary.length;

    for (let x=0; x< salLength; x++) {
        if (x != 0 && x != salLength - 1) {
            average += salary[x];
            count++;
        }
    }

    return average/count;
};
