//2788. Split Strings by Separator
//https://leetcode.com/problems/split-strings-by-separator
function splitWordsBySeparator(words: string[], separator: string): string[] {
    return words.join(separator).split(separator).filter(value=>value!='');
};
