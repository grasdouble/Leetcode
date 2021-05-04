/* 
Title: 1. Two Sum
URL: https://leetcode.com/problems/two-sum/
Personal Submission:
    https://leetcode.com/submissions/detail/444235489/
    52 / 52 test cases passed
    Runtime: 92 ms, faster than 15.15% of JavaScript online submissions for Two Sum.
    Memory Usage: 42.2 MB, less than 5.57% of JavaScript online submissions for Two Sum.

----
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists. 
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const comp = {};
    let result = [];
    for (const [idx, elm] of nums.entries()) {
        if(comp[elm]>=0){
            result = [comp[elm] , idx];
            break;
        }
        comp[target-elm] = idx;
    };
    return result;
};

module.exports = twoSum;