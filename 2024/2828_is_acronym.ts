//2828. Check if a String Is an Acronym of Words
//https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words
function isAcronym(words: string[], s: string): boolean {
    return s === words.map((x) => x[0]).join("");
};
