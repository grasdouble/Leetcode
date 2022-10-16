/*
Title: 20. Valid Parentheses
URL: https://leetcode.com/problems/valid-parentheses/
Personal Submission:
    https://leetcode.com/submissions/detail/532120983/
    91 / 91 test cases passed.
    Runtime: 64 ms, faster than 98.32% of JavaScript online submissions for Valid Parentheses.
    Memory Usage: 39.4 MB, less than 48.30% of JavaScript online submissions for Valid Parentheses.

----
Description

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
const openParentheses = "([{";
const closeParentheses = ")]}";
const linkedParentheses = { ")": "(", "]": "[", "}": "{" };

const isValid = function (s) {
  const opened = [];
  s.split("").forEach((elm) => {
    if (openParentheses.indexOf(elm) > -1) {
      opened.push(elm);
    } else {
      if (opened.length === 0) {
        return false;
      } else if (linkedParentheses[elm] === opened[opened.length - 1]) {
        opened.pop();
      } else {
        return false;
      }
    }
  });
  return opened.length === 0;
};

module.exports = isValid;
