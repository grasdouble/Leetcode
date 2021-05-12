/*
Title: 1646. Get Maximum in Generated Array
URL: https://leetcode.com/problems/get-maximum-in-generated-array/
Personal Submission:
    https://leetcode.com/submissions/detail/444235199/
    101 / 101 test cases passed.
    Runtime: 80 ms, faster than 55.23% of JavaScript online submissions for Get Maximum in Generated Array.
    Memory Usage: 38.6 MB, less than 69.97% of JavaScript online submissions for Get Maximum in Generated Array.

----
You are given an integer n. An array nums of length n + 1 is generated in the following way:

nums[0] = 0
nums[1] = 1
nums[2 * i] = nums[i] when 2 <= 2 * i <= n
nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
Return the maximum integer in the array nums​​​.

 

Example 1:

Input: n = 7
Output: 3
Explanation: According to the given rules:
  nums[0] = 0
  nums[1] = 1
  nums[(1 * 2) = 2] = nums[1] = 1
  nums[(1 * 2) + 1 = 3] = nums[1] + nums[2] = 1 + 1 = 2
  nums[(2 * 2) = 4] = nums[2] = 1
  nums[(2 * 2) + 1 = 5] = nums[2] + nums[3] = 1 + 2 = 3
  nums[(3 * 2) = 6] = nums[3] = 2
  nums[(3 * 2) + 1 = 7] = nums[3] + nums[4] = 2 + 1 = 3
Hence, nums = [0,1,1,2,1,3,2,3], and the maximum is 3.


Example 2:

Input: n = 2
Output: 1
Explanation: According to the given rules, the maximum between nums[0], nums[1], and nums[2] is 1.


Example 3:

Input: n = 3
Output: 2
Explanation: According to the given rules, the maximum between nums[0], nums[1], nums[2], and nums[3] is 2.
 

Constraints:

0 <= n <= 100
*/

/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  var nums = [0, 1];

  for (i = 1; i < n; i++) {
    if (2 * i <= n && 2 * i + 1 <= n) {
      nums[2 * i] = nums[i];
      nums[2 * i + 1] = nums[i] + nums[i + 1];
    }
  }

  return n == 0 ? 0 : Math.max(...nums);
};

/* Other Solution with Less Memory */
/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGeneratedMemory = function (n) {
  let k = [0, 1];

  if (n <= 0) return k[0];

  for (let i = 1; i < n; i++) {
    if (2 * i <= n && 2 * i + 1 <= n) {
      k[2 * i] = k[i];
      k[2 * i + 1] = k[i] + k[i + 1];
    }
  }

  return Math.max(...k);
};

/* Other Solution with Less Time */
/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGeneratedTime = function (n) {
  if (n === 0) return 0;

  let arr = [0, 1];
  let max = 1;

  for (let i = 2; i <= n; i++) {
    //TODO COMMENT: ~~ operator is similar to Math.floor to transform float to int but more faster
    let half = ~~(i / 2);
    if (i % 2 === 0) arr[i] = arr[half];
    else arr[i] = arr[half] + arr[half + 1];

    max = Math.max(max, arr[i]);
  }

  return max;
};

module.exports = getMaximumGenerated;
