/*
Title: 66. Plus One
URL: https://leetcode.com/problems/plus-one/description/
Personal Submission:
    https://leetcode.com/problems/plus-one/submissions/823906506/
    Runtime: 76 ms, faster than 79.10% of JavaScript online submissions for Plus One.
    Memory Usage: 41.7 MB, less than 83.37% of JavaScript online submissions for Plus One.

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
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  const tmp = (BigInt(digits.join("")) + BigInt(1)).toString().split("");
  for (i = 0; i < tmp.length; i++) {
    tmp[i] = parseInt(tmp[i]);
  }
  return tmp;
};

module.exports = plusOne;
