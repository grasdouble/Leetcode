/*
Title: 1512. Number of good pairs
URL: https://leetcode.com/problems/number-of-good-pairs/
Personal Submission:
    https://leetcode.com/problems/number-of-good-pairs/submissions/822540786/
    Runtime: 88 ms, faster than 63.28% of JavaScript online submissions for Number of good pairs.
    Memory Usage: 42.1 MB, less than 45.67% of JavaScript online submissions for Number of good pairs.

----

Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

Example 1:
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Example 3:
Input: nums = [1,2,3]
Output: 0
 

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = (nums) => {
  let startIndex = 0;
  let result = 0;
  while (startIndex < nums.length) {
    for (i = startIndex + 1; i < nums.length; i++) {
      result = nums[startIndex] == nums[i] ? result + 1 : result;
    }
    startIndex++;
  }
  return result;
};

module.exports = numIdenticalPairs;
