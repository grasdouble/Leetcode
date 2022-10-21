/*
Title: 69. Sqrt(x)
URL: https://leetcode.com/problems/sqrtx/description/
Personal Submission:
    https://leetcode.com/problems/find-anagram-mappings/submissions/823098335/
    Runtime: 76 ms, faster than 95.82% of JavaScript online submissions for Sqrt(x).
    Memory Usage: 42.7 MB, less than 90.97% of JavaScript online submissions for Sqrt(x).

----

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

Constraints:

0 <= x <= 231 - 1

*/

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
  return Math.floor(Math.sqrt(x));
};

module.exports = mySqrt;
module.exports = mySqrt;
