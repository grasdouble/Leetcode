/*
Title: 3. Longest Substring Without Repeating Characters
URL: https://leetcode.com/problems/longest-substring-without-repeating-characters/
Personal submission: 
    https://leetcode.com/submissions/detail/439735612/
    987 / 987 test cases passed.
    Status: Accepted
    Runtime: 144 ms, faster than 39.28% of JavaScript online submissions for Longest Substring Without Repeating Characters.
    Memory Usage: 44.4 MB, less than 54.30% of JavaScript online submissions for Longest Substring Without Repeating Characters.
    
----
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

*/

/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = function(s) {
    const ln = s.length;
    const arr = s.split('');
    const store = {};
    let result = 0;
    
    let firstIndex = 0;
    arr.forEach((elm, idx) =>{
        if(store[elm]){
            firstIndex = Math.max(store[elm], firstIndex);
        }
        store[elm] = idx+1;
        result = Math.max(result, store[elm] - firstIndex);
        
    })
    return result;
};