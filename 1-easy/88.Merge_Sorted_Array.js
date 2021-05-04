/*
Title: 88. Merge Sorted Array
URL: https://leetcode.com/problems/merge-sorted-array/
Personal Submission:
    https://leetcode.com/submissions/detail/444238575/
    59 / 59 test cases passed.
    Runtime: 76 ms, faster than 85.10% of JavaScript online submissions for Merge Sorted Array.
    Memory Usage: 38.4 MB, less than 81.57% of JavaScript online submissions for Merge Sorted Array.

----
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

 
Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
 

Constraints:

0 <= n, m <= 200
1 <= n + m <= 200
nums1.length == m + n
nums2.length == n
-10^9 <= nums1[i], nums2[i] <= 10^9

*/


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,nums1.length-m);
    //nums2.splice(n,nums2.length-n); not needed
    nums1.push(...nums2);
    nums1.sort(function(a,b){return a - b});
};

module.exports = merge;