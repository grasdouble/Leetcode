/*
Title: 35. Search Insert Position
URL: https://leetcode.com/problems/sort-the-people/description/
Personal Submission:
    https://leetcode.com/problems/search-insert-position/submissions/823834168/
    Runtime: 61 ms, faster than 95.58% of JavaScript online submissions for Search Insert Position.
    Memory Usage: 42 MB, less than 71.36% of JavaScript online submissions for Search Insert Position.

----

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let result = 0;
  let placeFound = false;
  for (i = 0; i < nums.length; i++) {
    if (target < nums[i] || target == nums[i]) {
      if (i != 0) {
        result = i;
      }
      i = nums.length;
      placeFound = true;
    }
  }
  if (!placeFound) {
    result = nums.length;
  }
  return result;
};

module.exports = searchInsert;
