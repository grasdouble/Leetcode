/*
Title: 1684. Count the Number of Consistent Strings
URL: https://leetcode.com/problems/count-the-number-of-consistent-strings/description/
Personal Submission:
    https://leetcode.com/problems/count-the-number-of-consistent-strings/submissions/823263621/
    Runtime: 148 ms, faster than 73.33% of JavaScript online submissions for Count the Number of Consistent Strings.
    Memory Usage: 51.2 MB, less than 70.33% of JavaScript online submissions for Count the Number of Consistent Strings.

----

You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

 

Example 1:
Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

Example 2:
Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.

Example 3:
Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
 

Constraints:

1 <= words.length <= 104
1 <= allowed.length <= 26
1 <= words[i].length <= 10
The characters in allowed are distinct.
words[i] and allowed contain only lowercase English letters.

*/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
const countConsistentStrings = (allowed, words) => {
  const regXp = new RegExp(`^[${allowed}]+$`);
  let result = 0;
  for (i = 0; i < words.length; i++) {
    if (regXp.test(words[i])) {
      result++;
    }
  }
  return result;
};

module.exports = countConsistentStrings;
