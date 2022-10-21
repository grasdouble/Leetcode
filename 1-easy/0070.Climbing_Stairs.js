/*
Title: 70. Climbing Stairs
URL: https://leetcode.com/problems/climbing-stairs/description/
Personal Submission:
    https://leetcode.com/problems/climbing-stairs/submissions/827570586/
    Runtime: 64 ms, faster than 90.84% of JavaScript online submissions for Climbing Stairs.
    Memory Usage: 41.7 MB, less than 78.26% of JavaScript online submissions for Climbing Stairs.

----

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45

*/

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 3;
  // https://en.wikipedia.org/wiki/Fibonacci_number
  let prevX = 2;
  let prevY = 3;
  let current = 0;
  for (i = 4; i <= n; i++) {
    current = prevX + prevY;
    prevX = prevY;
    prevY = current;
  }
  return current;
};

module.exports = climbStairs;
