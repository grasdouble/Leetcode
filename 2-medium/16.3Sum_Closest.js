/*
Title: 16. 3Sum Closest
URL: https://leetcode.com/problems/3sum-closest/
Personal Submission:
    https://leetcode.com/submissions/detail/492203185/
    131 / 131 test cases passed.
    Runtime: 88 ms, faster than 66.37% of JavaScript online submissions for 3Sum Closest.
    Memory Usage: 39.1 MB, less than 84.91% of JavaScript online submissions for 3Sum Closest.

----
Description

Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.


Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 

Constraints:

3 <= nums.length <= 10^3
-10^3 <= nums[i] <= 10^3
-10^4 <= target <= 10^4
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let r = 999;
  let targetDelta = 999;

  nums = nums.sort((a, b) => a - b);

  nums.forEach((elm, idx) => {
    let jdx = idx + 1;
    let kdx = nums.length - 1;

    while (jdx < kdx) {
      let sum = elm + nums[jdx] + nums[kdx];
      const targetDeltaTmp = Math.abs(target - sum);
      if (targetDeltaTmp < targetDelta) {
        r = sum;
        targetDelta = targetDeltaTmp;
      }

      if (sum > target) {
        kdx--;
      } else {
        jdx++;
      }
    }
  });
  return r;
};

module.exports = threeSumClosest;
