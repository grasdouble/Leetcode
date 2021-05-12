/*
Title: 1287. Element Appearing More Than 25% In Sorted Array
URL: https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
Personal Submission:
    https://leetcode.com/submissions/detail/444241877/
    18 / 18 test cases passed.
    Runtime: 132 ms, faster than 10.77% of JavaScript online submissions for Element Appearing More Than 25% In Sorted Array.
    Memory Usage: 45.3 MB, less than 19.23% of JavaScript online submissions for Element Appearing More Than 25% In Sorted Array.

----
Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time.

Return that integer.

 

Example 1:

Input: arr = [1,2,2,6,6,6,6,7,10]
Output: 6
 

Constraints:

1 <= arr.length <= 10^4
0 <= arr[i] <= 10^5

*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  var resultList = {};

  arr.forEach((elm) => {
    if (!resultList[elm]) {
      resultList[elm] = 1;
    } else {
      resultList[elm] = resultList[elm] + 1;
    }
  });
  var result = Object.entries(resultList).reduce((a, e) => {
    return e[1] > a[1] ? e : a;
  });
  return parseInt(result[0]);
};

module.exports = findSpecialInteger;
