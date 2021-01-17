/*
Title: 1550. Three Consecutive Odds
URL: https://leetcode.com/problems/three-consecutive-odds/
Personal Submission:
    https://leetcode.com/submissions/detail/444242710/
    32 / 32 test cases passed.
    Runtime: 80 ms, faster than 43.07% of JavaScript online submissions for Three Consecutive Odds.
    Memory Usage: 38.6 MB, less than 56.20% of JavaScript online submissions for Three Consecutive Odds

----
Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
 
Example 1:

Input: arr = [2,6,4,1]
Output: false
Explanation: There are no three consecutive odds.
Example 2:

Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.
 

Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 1000

*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    var counter = 0;
    arr.some(elm => {
        counter = elm % 2 === 1 ? counter+1 : 0;
        return counter === 3;
    });
    return counter === 3;
    
};

module.exports = threeConsecutiveOdds;