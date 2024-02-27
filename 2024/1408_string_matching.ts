//1408. String Matching in an Array
//https://leetcode.com/problems/string-matching-in-an-array
function stringMatching(words: string[]): string[] {
    const matches = [];

    for (let i=0; i < words.length; i++) {
        for (let j=0; j < words.length; j++) {
            if (words[j].includes(words[i]) && words[j]!== words[i] && !matches.includes(words[i])) {
                matches.push(words[i]);
            }
        }
    }

    return matches;
};
