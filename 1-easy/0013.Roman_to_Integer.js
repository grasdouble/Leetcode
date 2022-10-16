/*
Title: 13. Roman to Integer
URL: https://leetcode.com/problems/roman-to-integer/
Personal Submission:
    https://leetcode.com/submissions/detail/489337097/
    3999 / 3999 test cases passed.
    Runtime: 160 ms, faster than 80.28% of JavaScript online submissions for Roman to Integer.
    Memory Usage: 45.2 MB, less than 58.61% of JavaScript online submissions for Roman to Integer.

----
Description

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Example 2:

Input: s = "IV"
Output: 4
Example 3:

Input: s = "IX"
Output: 9
Example 4:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const arr = s.split("");
  let tmpResult = 0;
  arr.forEach((elm) => {
    if (elm === "I") {
      tmpResult++;
    } else if (elm === "V") {
      if (tmpResult % 10 === 1) {
        tmpResult += 3;
      } else {
        tmpResult += 5;
      }
    } else if (elm === "X") {
      if (tmpResult % 10 === 1) {
        tmpResult += 8;
      } else {
        tmpResult += 10;
      }
    } else if (elm === "L") {
      if (tmpResult % 100 === 10) {
        tmpResult += 30;
      } else {
        tmpResult += 50;
      }
    } else if (elm === "C") {
      if (tmpResult % 100 === 10) {
        tmpResult += 80;
      } else {
        tmpResult += 100;
      }
    } else if (elm === "D") {
      if (tmpResult % 1000 === 100) {
        tmpResult += 300;
      } else {
        tmpResult += 500;
      }
    } else if (elm === "M") {
      if (tmpResult % 1000 === 100) {
        tmpResult += 800;
      } else {
        tmpResult += 1000;
      }
    }
  });
  return tmpResult;
};

module.exports = romanToInt;
