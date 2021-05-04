/*
Title: 7. Reverse Integer
URL: https://leetcode.com/problems/reverse-integer/
Personal Submission:
    https://leetcode.com/submissions/detail/445110003/
    1032 / 1032 test cases passed.
    Runtime: 100 ms, faster than 58.63% of JavaScript online submissions for Reverse Integer.
    Memory Usage: 40.4 MB, less than 38.18% of JavaScript online submissions for Reverse Integer.

----
/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
 

Constraints:

-231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = x < 0;
    const result = +String(Math.abs(x)).split("").reverse().join('');
    // 0x7FFFFFFF maximum value for a signed 32-bit integer
    if(result > 0x7FFFFFFF) return 0;
    return isNegative ? -result : result;
};

module.exports = reverse;