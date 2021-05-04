/*
Title: 42. Trapping Rain Water
URL: https://leetcode.com/problems/trapping-rain-water/
Personal Submission:
    https://leetcode.com/submissions/detail/444237554/
    320 / 320 test cases passed.
    Runtime: 84 ms, faster than 86.23% of JavaScript online submissions for Trapping Rain Water.
    Memory Usage: 39.5 MB, less than 50.07% of JavaScript online submissions for Trapping Rain Water.

----
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
0 <= n <= 3 * 10^4
0 <= height[i] <= 10^5

*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftMax = 0; 
    let rightMax = 0;
    let left = 0;
    let right = height.length - 1;
    let result = 0;
    
    while(left < right){
        if(height[left] < height[right]){
            if(height[left] >= leftMax){
               leftMax = height[left]; 
            }else{
                result += leftMax - height[left];
            }
            left++;
        }else{
            if(height[right] >= rightMax){
               rightMax = height[right]; 
            }else{
                result += rightMax - height[right];
            }
            right--;
        }
    }
    return result;
};