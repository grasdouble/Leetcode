/*
Title: 14. Longest Common Prefix
URL: https://leetcode.com/problems/longest-common-prefix/
Personal Submission:
    https://leetcode.com/submissions/detail/489350611/
    123 / 123 test cases passed.
    Runtime: 80 ms, faster than 85.58% of JavaScript online submissions for Longest Common Prefix.
    Memory Usage: 39.7 MB, less than 49.90% of JavaScript online submissions for Longest Common Prefix.

----
Description

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let t = strs[0].split('');
    let tSize = t.length;

    strs.shift();
    strs.forEach(elm =>{
        const e = elm.split('');
        if(tSize> e.length) {
            t.splice(e.length, tSize);
            tSize = t.length;
        }
        for(i = 0; i < tSize;i++){
            if(e[i] != t[i]){
                t.splice(i,tSize-i);
                tSize = t.length;
            }
        }    
    })
    return t.join('');
};

module.exports = longestCommonPrefix;