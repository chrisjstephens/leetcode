//https://leetcode.com/problems/valid-anagram/
//242. Valid Anagram
function isAnagram(s: string, t: string): boolean {
    const newS = s.split('').sort().join('');
    const newT = t.split('').sort().join('');

    return newS === newT;
};
