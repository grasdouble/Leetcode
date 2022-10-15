/*
Title: 2006. Count Number of Pairs With Absolute Difference K
URL: https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/description/
Personal Submission:
    https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/submissions/823257243/
    Runtime: 105 ms, faster than 58.82% of JavaScript online submissions for Count Number of Pairs With Absolute Difference K.
    Memory Usage: 43 MB, less than 42.75% of JavaScript online submissions for Count Number of Pairs With Absolute Difference K.

----

Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

x if x >= 0.
-x if x < 0.
 

Example 1:

Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]

Example 2:
Input: nums = [1,3], k = 3
Output: 0
Explanation: There are no pairs with an absolute difference of 3.

Example 3:
Input: nums = [3,2,1,5,4], k = 2
Output: 3
Explanation: The pairs with an absolute difference of 2 are:
- [3,2,1,5,4]
- [3,2,1,5,4]
- [3,2,1,5,4]
 

Constraints:

1 <= nums.length <= 200
1 <= nums[i] <= 100
1 <= k <= 99
 

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countKDifference = (nums, k) => {
  const next = nums[0];
  let result = 0;
  nums.shift();
  if (nums.length > 0) {
    result += checks(next, nums, k);
  }
  return result;
};

const checks = (nb, nums, k) => {
  let result = 0;
  for (i = 0; i < nums.length; i++) {
    if (nb > nums[i] && nb - nums[i] == k) {
      result++;
    } else if (nums[i] - nb == k) {
      result++;
    }
  }
  const next = nums[0];
  nums.shift();
  if (nums.length > 0) {
    result += checks(next, nums, k);
  }
  return result;
};

module.exports = countKDifference;
