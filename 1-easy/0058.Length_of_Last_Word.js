/*
Title: 58. Length of Last Word
URL: https://leetcode.com/problems/length-of-last-word/description/
Personal Submission:
    https://leetcode.com/problems/length-of-last-word/submissions/823857582/
    Runtime: 85 ms, faster than 67.7% of JavaScript online submissions for Length of Last Word.
    Memory Usage: 42.1 MB, less than 41.40% of JavaScript online submissions for Length of Last Word.

----

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

 

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.

*/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  const arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
};

module.exports = lengthOfLastWord;
