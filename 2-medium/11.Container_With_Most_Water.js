/*
Title: 11. Container With Most Water
URL: https://leetcode.com/problems/container-with-most-water/
Personal Submission:
    https://leetcode.com/submissions/detail/488928453/
    60 / 60 test cases passed.
    Runtime: 96 ms, faster than 46.41% of JavaScript online submissions for Container With Most Water.
    Memory Usage: 47.9 MB, less than 63.83% of JavaScript online submissions for Container With Most Water.

----
Description

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
Example 3:

Input: height = [4,3,2,1,4]
Output: 16
Example 4:

Input: height = [1,2,1]
Output: 2
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/

/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
  /*
    let result = 0;
    height.forEach((elm,idx) => {
        for(i = 0; i<=idx; i++){
            base = elm<height[i]?elm:height[i];
            const tmp = base*(idx-i);
            result = result>tmp?result:tmp
        }
    });
    return result;
    */

  let idx = 0;
  let jdx = height.length - 1;

  let max = 0;

  while (idx < jdx) {
    const tmp = Math.min(height[idx], height[jdx]) * (jdx - idx);
    max = Math.max(max, tmp);
    if (height[idx] < height[jdx]) {
      idx++;
    } else {
      jdx--;
    }
  }

  return max;
};

module.exports = maxArea;
