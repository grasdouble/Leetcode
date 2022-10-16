/*
Title: 15. 3Sum
URL: https://leetcode.com/problems/3sum/
Personal Submission:
    https://leetcode.com/submissions/detail/491816311/
    318 / 318 test cases passed.
    Runtime: 128 ms, faster than 99.71% of JavaScript online submissions for 3Sum.
    Memory Usage: 48.6 MB, less than 81.15% of JavaScript online submissions for 3Sum.

----
Description
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const r = [];
  nums = nums.sort((a, b) => a - b);
  nums.forEach((elm, idx) => {
    if (nums[idx - 1] !== elm) {
      let jdx = idx + 1;
      let kdx = nums.length - 1;

      while (jdx < kdx) {
        let sum = elm + nums[jdx] + nums[kdx];
        if (sum === 0) {
          const tmpValue = [elm, nums[jdx], nums[kdx]];
          r.push(tmpValue);
          while (nums[jdx] === nums[jdx + 1]) jdx++;
          while (nums[kdx] === nums[kdx - 1]) kdx--;
        }

        if (sum > 0) {
          kdx--;
        } else {
          jdx++;
        }
      }
    }
  });
  return r;
};

module.exports = threeSum;
